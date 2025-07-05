'use server';

/**
 * @fileOverview Generates a draft for an insight article from a topic.
 *
 * - generateInsightArticle - A function that generates an article.
 * - GenerateInsightArticleInput - The input type for the generateInsightArticle function.
 * - GenerateInsightArticleOutput - The return type for the generateInsightArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInsightArticleInputSchema = z.object({
  topic: z.string().describe('The topic for the insight article.'),
});
export type GenerateInsightArticleInput = z.infer<typeof GenerateInsightArticleInputSchema>;

const GenerateInsightArticleOutputSchema = z.object({
  title: z.string().describe("A compelling title for the article."),
  summary: z.string().describe("A concise, one-paragraph summary of the article."),
  content: z.string().describe("The full content of the article, formatted in HTML with paragraphs, headings (h3), and lists where appropriate."),
});
export type GenerateInsightArticleOutput = z.infer<typeof GenerateInsightArticleOutputSchema>;

export async function generateInsightArticle(
  input: GenerateInsightArticleInput
): Promise<GenerateInsightArticleOutput> {
  return generateInsightArticleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInsightArticlePrompt',
  input: {schema: GenerateInsightArticleInputSchema},
  output: {schema: GenerateInsightArticleOutputSchema},
  prompt: `You are an expert financial analyst and content creator specializing in AI in Fintech.

Your task is to write an insightful article based on the following topic:
---
{{{topic}}}
---

Generate the following components for the article:
1.  **title**: A compelling and SEO-friendly title.
2.  **summary**: A single, engaging paragraph that summarizes the key points of the article.
3.  **content**: The full article content. It should be well-structured, informative, and at least 3-4 paragraphs long. Use HTML for formatting. You should use <p> tags for paragraphs, <h3> tags for subheadings, and <ul>/<li> for lists if it makes sense for the content. Do not use <h1> or <h2> tags. The tone should be professional yet accessible.

Provide the output in the specified JSON format.
`,
});

const generateInsightArticleFlow = ai.defineFlow(
  {
    name: 'generateInsightArticleFlow',
    inputSchema: GenerateInsightArticleInputSchema,
    outputSchema: GenerateInsightArticleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
