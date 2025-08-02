import { ai } from '@/ai/genkit';
import { getChatbotContexts } from '@/lib/data';
import * as z from 'zod';

export const financialConcierge = ai.defineFlow(
  {
    name: 'financialConcierge',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (query) => {
    try {
      // Check if Gemini API key is available
      if (!process.env.GEMINI_API_KEY) {
        console.error('GEMINI_API_KEY is not set');
        return "I'm sorry, but the AI service is not properly configured. Please contact support.";
      }

      console.log('Getting chatbot contexts...');
      const contexts = await getChatbotContexts();
      console.log(`Retrieved ${contexts.length} contexts`);
      
      // Use only the first context to avoid token limits
      const context = contexts[0]?.text || "AI in fintech refers to the use of artificial intelligence technologies in financial services.";
      
      // Truncate context if it's too long (keep first 1000 characters)
      const truncatedContext = context.length > 1000 ? context.substring(0, 1000) + '...' : context;

      console.log('Generating AI response...');
      // Use a simple generate call instead of prompt
      const result = await ai.generate({
        prompt: `You are an AI FinTech Insights Concierge. Answer this question based on the provided context.

Context: ${truncatedContext}

Question: ${query}

Answer:`,
      });
      
      const responseText = result.text;
      if (!responseText) {
        console.error('AI generated empty response');
        return "I'm sorry, but I was unable to generate a response. Please try rephrasing your question or check back later.";
      }
      
      console.log('AI response generated successfully');
      return responseText;
    } catch (error) {
      console.error('Financial concierge error:', error);
      
      // Provide more specific error messages based on the error type
      if (error instanceof Error) {
        if (error.message.includes('API key')) {
          return "I'm sorry, but there's an issue with the AI service configuration. Please try again later.";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          return "I'm sorry, but I'm having trouble connecting to the AI service. Please check your internet connection and try again.";
        } else if (error.message.includes('quota') || error.message.includes('limit')) {
          return "I'm sorry, but the AI service is currently experiencing high demand. Please try again in a few minutes.";
        }
      }
      
      return "I'm sorry, but I encountered an error while processing your request. Please try again later.";
    }
  }
);

// This is the function that will be called from the server action.
export async function askFinancialConcierge(query: string): Promise<string> {
  return financialConcierge(query);
} 