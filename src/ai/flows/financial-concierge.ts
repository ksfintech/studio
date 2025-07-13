import { ai } from '@/ai/genkit';
import * as z from 'zod';
import { getChatbotContexts } from '@/lib/data';

const FinancialConciergeInputSchema = z.object({
  query: z.string(),
  context: z.string(),
});

const FinancialConciergeOutputSchema = z.string().nullable();

const prompt = ai.definePrompt({
  name: 'financialConciergePrompt',
  input: { schema: FinancialConciergeInputSchema },
  output: { schema: FinancialConciergeOutputSchema },
  prompt: `You are an expert financial AI assistant called the AI FinTech Insights Concierge.
Your goal is to provide helpful and accurate answers to user questions based ONLY on the context provided.
Do not use any external knowledge. If the context does not contain the answer, politely state that you do not have enough information to answer.
Do not answer questions that are not related to financial AI.

CONTEXT:
---
{{{context}}}
---

USER QUESTION:
{{{query}}}

ANSWER:
`,
});

export const financialConcierge = ai.defineFlow(
  {
    name: 'financialConcierge',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (query) => {
    const contexts = await getChatbotContexts();
    const contextString = contexts.map(c => c.text).join('\n---\n');

    const { output } = await prompt({
        query,
        context: contextString,
    });
    
    if (!output) {
      return "I'm sorry, but I was unable to generate a response. Please try rephrasing your question or check back later.";
    }
    
    return output;
  }
);

// This is the function that will be called from the server action.
export async function askFinancialConcierge(query: string): Promise<string> {
  return financialConcierge(query);
} 