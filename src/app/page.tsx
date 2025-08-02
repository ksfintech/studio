
import { getAgents, getCategories, getFeaturedAgentIds } from '@/lib/data';
import { AgentList } from '@/components/tools/tool-list';
import { Suspense } from 'react';
import { AgentListSkeleton } from '@/components/tools/tool-skeletons';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Sparkles } from 'lucide-react';

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
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Your guide to the world of AI in Fintech. Discover, filter, and
          find the perfect agent to revolutionize your financial services.
        </p>
        
        {/* AI Concierge CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Need Personalized Guidance?</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Chat with our AI Financial Concierge to get expert insights, discover the perfect tools for your needs, 
              and learn about the latest trends in financial technology.
            </p>
            <Link href="/chatbot">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8">
                <Bot className="w-5 h-5 mr-2" />
                Start Chatting with AI Concierge
              </Button>
            </Link>
          </div>
        </div>
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
