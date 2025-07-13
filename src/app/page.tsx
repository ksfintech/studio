
import { getAgents, getCategories, getFeaturedAgentIds } from '@/lib/data';
import { AgentList } from '@/components/tools/tool-list';
import { Suspense } from 'react';
import { AgentListSkeleton } from '@/components/tools/tool-skeletons';

export default async function Home() {
  const [agents, categories, featuredAgentIds] = await Promise.all([
    getAgents(),
    getCategories(),
    getFeaturedAgentIds(),
  ]);

  const featuredAgents = agents.filter(agent =>
    featuredAgentIds.includes(agent.id)
  );

  return (
    <>
      <div className="container mx-auto px-4 pt-12 md:pt-20 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Find the Right AI Agent for your Financial Needs
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your guide to the world of AI in Fintech. Discover, filter, and
          find the perfect agent to revolutionize your financial services.
        </p>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <Suspense fallback={<AgentListSkeleton />}>
          <AgentList
            agents={agents}
            categories={categories}
            featuredAgents={featuredAgents}
          />
        </Suspense>
      </div>
    </>
  );
}
