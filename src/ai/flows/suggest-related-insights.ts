'use server';

/**
 * @fileOverview Suggests related insight articles based on the tool's category and description.
 *
 * - suggestRelatedInsights - A function that suggests related insight articles.
 * - SuggestRelatedInsightsInput - The input type for the suggestRelatedInsights function.
 * - SuggestRelatedInsightsOutput - The return type for the suggestRelatedInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelatedInsightsInputSchema = z.object({
  toolCategory: z.string().describe('The category of the AI Fintech tool.'),
  toolDescription: z.string().describe('The description of the AI Fintech tool.'),
});
export type SuggestRelatedInsightsInput = z.infer<typeof SuggestRelatedInsightsInputSchema>;

const SuggestRelatedInsightsOutputSchema = z.array(
  z.object({
    title: z.string().describe('The title of the related insight article.'),
    summary: z.string().describe('A concise summary of the related insight article.'),
  })
);
export type SuggestRelatedInsightsOutput = z.infer<typeof SuggestRelatedInsightsOutputSchema>;

export async function suggestRelatedInsights(
  input: SuggestRelatedInsightsInput
): Promise<SuggestRelatedInsightsOutput> {
  return suggestRelatedInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedInsightsPrompt',
  input: {schema: SuggestRelatedInsightsInputSchema},
  output: {schema: SuggestRelatedInsightsOutputSchema},
  prompt: `You are an AI assistant designed to suggest related insight articles based on the category and description of an AI Fintech tool.

  Given the following AI Fintech tool category and description, suggest 3 related insight articles. Return the title and a concise summary for each article.

  Tool Category: {{{toolCategory}}}
  Tool Description: {{{toolDescription}}}

  Format the output as a JSON array of objects, where each object has a "title" and a "summary" field.
  `,
});

const suggestRelatedInsightsFlow = ai.defineFlow(
  {
    name: 'suggestRelatedInsightsFlow',
    inputSchema: SuggestRelatedInsightsInputSchema,
    outputSchema: SuggestRelatedInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
