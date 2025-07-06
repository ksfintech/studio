'use server';

/**
 * @fileOverview Recommends AI agents based on a user's described need.
 *
 * - recommendAgents - A function that returns a list of recommended agents.
 * - RecommendAgentsInput - The input type for the recommendAgents function.
 * - RecommendAgentsOutput - The return type for the recommendAgents function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AgentSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    accomplishment: z.string(),
});

const RecommendAgentsInputSchema = z.object({
  userNeed: z.string().describe("The user's description of their problem or business need."),
  agents: z.array(AgentSchema).describe("A list of available AI agents to choose from."),
});
export type RecommendAgentsInput = z.infer<typeof RecommendAgentsInputSchema>;

const RecommendAgentsOutputSchema = z.array(
    z.object({
        agentId: z.string().describe("The ID of the recommended agent."),
        justification: z.string().describe("A concise, one-to-two sentence explanation of why this agent is a good fit for the user's need."),
    })
).max(3, { message: "Recommend no more than 3 agents." });
export type RecommendAgentsOutput = z.infer<typeof RecommendAgentsOutputSchema>;


export async function recommendAgents(
  input: RecommendAgentsInput
): Promise<RecommendAgentsOutput> {
  return recommendAgentsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendAgentsPrompt',
  input: {schema: RecommendAgentsInputSchema},
  output: {schema: RecommendAgentsOutputSchema},
  prompt: `You are an expert fintech consultant. Your task is to recommend the best AI agents to solve a user's problem.

Analyze the user's need described below:
---
USER NEED: {{{userNeed}}}
---

Here is a list of available AI agents:
---
{{#each agents}}
- Agent ID: {{{this.id}}}
- Name: {{{this.name}}}
- Description: {{{this.description}}}
- Accomplishment/Value Proposition: {{{this.accomplishment}}}
---
{{/each}}
---

Based on the user's need, select up to three of the most relevant agents from the list. For each recommended agent, provide its ID and a short, compelling justification (1-2 sentences) explaining why it's the perfect fit. Focus on how the agent's capabilities directly address the user's stated problem.

Provide the output in the specified JSON format. Only return the agents that are a good match. If no agents are a good match, return an empty array.
`,
});

const recommendAgentsFlow = ai.defineFlow(
  {
    name: 'recommendAgentsFlow',
    inputSchema: RecommendAgentsInputSchema,
    outputSchema: RecommendAgentsOutputSchema,
  },
  async input => {
    // Filter agents to only include properties needed for the prompt
    // to avoid sending unnecessary data and reduce token usage.
    const agentsForPrompt = input.agents.map(agent => ({
        id: agent.id,
        name: agent.name,
        description: agent.description,
        accomplishment: agent.accomplishment,
    }));

    const {output} = await prompt({
        userNeed: input.userNeed,
        agents: agentsForPrompt,
    });
    return output!;
  }
);
