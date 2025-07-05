
import { getTools, getCategories, getFeaturedToolIds } from '@/lib/data';
import { ToolList } from '@/components/tools/tool-list';
import { Suspense } from 'react';
import { FeaturedTool } from '@/components/tools/featured-tool';
import {
  FeaturedToolSkeleton,
  ToolListSkeleton,
} from '@/components/tools/tool-skeletons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default async function Home() {
  const [tools, categories, featuredToolIds] = await Promise.all([
    getTools(),
    getCategories(),
    getFeaturedToolIds(),
  ]);

  const featuredTools = tools.filter(tool => featuredToolIds.includes(tool.id));

  return (
    <>
      <div className="container mx-auto px-4 pt-12 md:pt-20 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary mb-4">
          Find The Right AI Tool
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your guide to the world of AI in Fintech. Discover, filter, and
          find the perfect tool to revolutionize your financial services.
        </p>
      </div>

      {featuredTools.length > 0 && (
        <div className="container mx-auto px-4 pb-12">
          <Suspense fallback={<FeaturedToolSkeleton />}>
            <section aria-labelledby="featured-tool-heading">
              <div className="mb-8 text-center">
                <h2
                  id="featured-tool-heading"
                  className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                >
                  Featured Tools
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Check out this week&apos;s highlighted tools for innovation in
                  Fintech.
                </p>
              </div>
              <Carousel
                opts={{
                  align: 'start',
                  loop: featuredTools.length > 1,
                }}
                className="w-full px-12"
              >
                <CarouselContent>
                  {featuredTools.map(tool => (
                    <CarouselItem key={tool.id}>
                      <div className="p-1">
                        <FeaturedTool tool={tool} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {featuredTools.length > 1 && (
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
        <Suspense fallback={<ToolListSkeleton />}>
          <ToolList tools={tools} categories={categories} />
        </Suspense>
      </div>
    </>
  );
}
