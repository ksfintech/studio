
import { getAgents, getCategories } from '@/lib/data';
import { AgentComparison } from '@/components/compare/agent-comparison';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare AI Agents | AIFinTechInsights.com',
  description:
    'Compare different AI fintech agents side-by-side based on their category and features.',
};

export default async function ComparePage() {
  const [agents, categories] = await Promise.all([
    getAgents(),
    getCategories(),
  ]);

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          Compare AI Agents
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Select a category to see a side-by-side comparison of agents and their key features.
        </p>
      </div>
      <AgentComparison agents={agents} categories={categories} />
    </div>
  );
}
