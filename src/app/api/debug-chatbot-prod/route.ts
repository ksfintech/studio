import { NextResponse } from 'next/server';
import { getChatbotContexts } from '@/lib/data';
import { askFinancialConcierge } from '@/ai/flows/financial-concierge';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      geminiApiKey: process.env.GEMINI_API_KEY ? 'Set' : 'Not Set',
      firebaseApiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Set' : 'Not Set',
      firebaseProjectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Set' : 'Not Set',
      nodeEnv: process.env.NODE_ENV || 'Not Set',
    };

    // Test getting chatbot contexts
    let contextsResult;
    try {
      const contexts = await getChatbotContexts();
      contextsResult = {
        success: true,
        count: contexts.length,
        sample: contexts[0] ? {
          id: contexts[0].id,
          section: contexts[0].section,
          textLength: contexts[0].text.length
        } : null
      };
    } catch (error) {
      contextsResult = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }

    // Test AI flow
    let aiResult;
    try {
      const testQuery = "What is AI in fintech?";
      const result = await askFinancialConcierge(testQuery);
      aiResult = {
        success: true,
        query: testQuery,
        responseLength: result ? result.length : 0,
        response: result ? result.substring(0, 100) + '...' : 'No response'
      };
    } catch (error) {
      aiResult = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      };
    }

    return NextResponse.json({
      status: 'debug_info',
      timestamp: new Date().toISOString(),
      environment: envCheck,
      contexts: contextsResult,
      ai: aiResult,
      deployment: {
        url: process.env.VERCEL_URL || 'Not Vercel',
        region: process.env.VERCEL_REGION || 'Unknown',
      }
    });

  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Debug endpoint failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 