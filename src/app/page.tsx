import { getTools, getCategories, getFeaturedToolId } from '@/lib/data';
import { ToolList } from '@/components/tools/tool-list';
import { Suspense } from 'react';
import { FeaturedTool } from '@/components/tools/featured-tool';
import {
  FeaturedToolSkeleton,
  ToolListSkeleton,
} from '@/components/tools/tool-skeletons';

export default async function Home() {
  const [tools, categories, featuredToolId] = await Promise.all([
    getTools(),
    getCategories(),
    getFeaturedToolId(),
  ]);

  const featuredTool =
    tools.find(tool => tool.id === featuredToolId) || tools[0];

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

      {featuredTool && (
        <div className="container mx-auto px-4 pb-12">
          <Suspense fallback={<FeaturedToolSkeleton />}>
            <FeaturedTool tool={featuredTool} />
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
