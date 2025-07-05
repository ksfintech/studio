'use server';

/**
 * @fileOverview Extracts tool information from text using AI.
 *
 * - generateToolDetails - A function that extracts tool details from a block of text.
 * - GenerateToolDetailsInput - The input type for the generateToolDetails function.
 * - GenerateToolDetailsOutput - The return type for the generateToolDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateToolDetailsInputSchema = z.object({
  text: z.string().describe('A block of text describing a fintech tool, likely from its website.'),
  existingCategories: z.array(z.string()).describe('A list of existing categories to choose from.'),
});
export type GenerateToolDetailsInput = z.infer<typeof GenerateToolDetailsInputSchema>;

const GenerateToolDetailsOutputSchema = z.object({
  name: z.string().describe("The name of the tool."),
  description: z.string().describe("A brief, one-sentence summary of what the tool does."),
  company: z.string().describe("The name of the company that created the tool."),
  categories: z.array(z.string()).describe("A list of relevant categories for the tool, selected from the provided list."),
  features: z.array(z.string()).describe("A list of key features of the tool."),
  accomplishment: z.string().describe("A concise paragraph explaining what the tool accomplishes and its primary value proposition."),
});
export type GenerateToolDetailsOutput = z.infer<typeof GenerateToolDetailsOutputSchema>;

export async function generateToolDetails(
  input: GenerateToolDetailsInput
): Promise<GenerateToolDetailsOutput> {
  return generateToolDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateToolDetailsPrompt',
  input: {schema: GenerateToolDetailsInputSchema},
  output: {schema: GenerateToolDetailsOutputSchema},
  prompt: `You are an expert fintech analyst. Your task is to extract structured information about an AI fintech tool from a block of text.

Analyze the following text:
---
{{{text}}}
---

From the text, extract the following information:
1.  **name**: The official name of the tool.
2.  **description**: A single, compelling sentence that summarizes the tool's main function.
3.  **company**: The name of the parent company or creator.
4.  **categories**: Choose the most relevant categories from the following list. Select at least one, but no more than three.
    Available Categories:
    {{#each existingCategories}}
    - {{{this}}}
    {{/each}}
5.  **features**: List the key features mentioned.
6.  **accomplishment**: Write a short paragraph (2-3 sentences) detailing the tool's main accomplishment or value proposition. This should be more detailed than the one-sentence description.

Provide the output in the specified JSON format.
`,
});

const generateToolDetailsFlow = ai.defineFlow(
  {
    name: 'generateToolDetailsFlow',
    inputSchema: GenerateToolDetailsInputSchema,
    outputSchema: GenerateToolDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
