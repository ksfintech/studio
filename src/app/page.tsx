
import { getAgents, getCategories, getFeaturedAgentIds } from '@/lib/data';
import { AgentList } from '@/components/tools/tool-list';
import { Suspense } from 'react';
import { FeaturedAgent } from '@/components/tools/featured-tool';
import {
  FeaturedAgentSkeleton,
  AgentListSkeleton,
} from '@/components/tools/tool-skeletons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default async function Home() {
  const [agents, categories, featuredAgentIds] = await Promise.all([
    getAgents(),
    getCategories(),
    getFeaturedAgentIds(),
  ]);

  const featuredAgents = agents.filter(agent => featuredAgentIds.includes(agent.id));

  return (
    <>
      <div className="container mx-auto px-4 pt-12 md:pt-20 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-4">
          Find The Right AI Agent For Finance
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your guide to the world of AI in Fintech. Discover, filter, and
          find the perfect agent to revolutionize your financial services.
        </p>
      </div>

      {featuredAgents.length > 0 && (
        <div className="container mx-auto px-4 pb-12">
          <Suspense fallback={<FeaturedAgentSkeleton />}>
            <section aria-labelledby="featured-agent-heading">
              <div className="mb-8 text-center">
                <h2
                  id="featured-agent-heading"
                  className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                >
                  Featured Agents
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Check out this week&apos;s highlighted agents for innovation in
                  Fintech.
                </p>
              </div>
              <Carousel
                opts={{
                  align: 'start',
                  loop: featuredAgents.length > 1,
                }}
                className="w-full px-12"
              >
                <CarouselContent>
                  {featuredAgents.map(agent => (
                    <CarouselItem key={agent.id}>
                      <div className="p-1">
                        <FeaturedAgent agent={agent} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {featuredAgents.length > 1 && (
                  <>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </>
                )}
              </Carousel>
            </section>
          </Suspense>
        </div>
      )}

      <div className="container mx-auto px-4 pb-16">
        <Suspense fallback={<AgentListSkeleton />}>
          <AgentList agents={agents} categories={categories} />
        </Suspense>
      </div>
    </>
  );
}
