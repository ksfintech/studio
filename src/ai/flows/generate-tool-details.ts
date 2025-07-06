'use server';

/**
 * @fileOverview Extracts agent information from text using AI.
 *
 * - generateAgentDetails - A function that extracts agent details from a block of text.
 * - GenerateAgentDetailsInput - The input type for the generateAgentDetails function.
 * - GenerateAgentDetailsOutput - The return type for the generateAgentDetails function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAgentDetailsInputSchema = z.object({
  text: z.string().describe('A block of text describing a fintech agent, likely from its website.'),
  existingCategories: z.array(z.string()).describe('A list of existing categories to choose from.'),
});
export type GenerateAgentDetailsInput = z.infer<typeof GenerateAgentDetailsInputSchema>;

const GenerateAgentDetailsOutputSchema = z.object({
  name: z.string().describe("The name of the agent."),
  description: z.string().describe("A brief, one-sentence summary of what the agent does."),
  company: z.string().describe("The name of the company that created the agent."),
  categories: z.array(z.string()).describe("A list of relevant categories for the agent, selected from the provided list."),
  features: z.array(z.string()).describe("A list of key features of the agent."),
  accomplishment: z.string().describe("A concise paragraph explaining what the agent accomplishes and its primary value proposition."),
});
export type GenerateAgentDetailsOutput = z.infer<typeof GenerateAgentDetailsOutputSchema>;

export async function generateAgentDetails(
  input: GenerateAgentDetailsInput
): Promise<GenerateAgentDetailsOutput> {
  return generateAgentDetailsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAgentDetailsPrompt',
  input: {schema: GenerateAgentDetailsInputSchema},
  output: {schema: GenerateAgentDetailsOutputSchema},
  prompt: `You are an expert fintech analyst. Your task is to extract structured information about an AI fintech agent from a block of text.

Analyze the following text:
---
{{{text}}}
---

From the text, extract the following information:
1.  **name**: The official name of the agent.
2.  **description**: A single, compelling sentence that summarizes the agent's main function.
3.  **company**: The name of the parent company or creator.
4.  **categories**: Choose the most relevant categories from the following list. Select at least one, but no more than three.
    Available Categories:
    {{#each existingCategories}}
    - {{{this}}}
    {{/each}}
5.  **features**: List the key features mentioned.
6.  **accomplishment**: Write a short paragraph (2-3 sentences) detailing the agent's main accomplishment or value proposition. This should be more detailed than the one-sentence description.

Provide the output in the specified JSON format.
`,
});

const generateAgentDetailsFlow = ai.defineFlow(
  {
    name: 'generateAgentDetailsFlow',
    inputSchema: GenerateAgentDetailsInputSchema,
    outputSchema: GenerateAgentDetailsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
