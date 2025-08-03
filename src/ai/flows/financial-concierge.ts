import { ai } from '@/ai/genkit';
import { getChatbotContexts } from '@/lib/data';
import * as z from 'zod';

// Accept optional sectionIds/tags for context filtering
export const financialConcierge = ai.defineFlow(
  {
    name: 'financialConcierge',
    inputSchema: z.object({ query: z.string(), sectionIds: z.array(z.string()).optional(), tags: z.array(z.string()).optional() }),
    outputSchema: z.string(),
  },
  async ({ query, sectionIds, tags }) => {
    try {
      if (!process.env.GEMINI_API_KEY) {
        console.error('GEMINI_API_KEY is not set');
        return "I'm sorry, but the AI service is not properly configured. Please contact support.";
      }
      console.log('Getting chatbot contexts...');
      const contexts = await getChatbotContexts({ sectionIds, tags });
      console.log(`Retrieved ${contexts.length} contexts`);
      if (!contexts.length) {
        return "I'm sorry, but there is no context available to answer your question.";
      }
      // Group by section, concatenate text
      let contextText = '';
      let lastSection = '';
      for (const ctx of contexts) {
        if (ctx.sectionTitle !== lastSection) {
          contextText += `\n\n[Section: ${ctx.sectionTitle}]\n`;
          lastSection = ctx.sectionTitle;
        }
        contextText += ctx.text + '\n';
      }
      // Truncate if too long
      const truncatedContext = contextText.length > 3000 ? contextText.substring(0, 3000) + '...' : contextText;
      console.log('Generating AI response...');
      const result = await ai.generate({
        prompt: `You are an AI FinTech Insights Concierge. Answer this question based on the provided context.\n\nContext: ${truncatedContext}\n\nQuestion: ${query}\n\nAnswer:`,
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
export async function askFinancialConcierge(query: string, options?: { sectionIds?: string[]; tags?: string[] }): Promise<string> {
  return financialConcierge({ query, ...(options || {}) });
} 