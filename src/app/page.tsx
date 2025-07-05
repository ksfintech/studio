import { getTools, getCategories } from '@/lib/data';
import { ToolList } from '@/components/tools/tool-list';
import { Suspense } from 'react';

export default async function Home() {
  const tools = await getTools();
  const categories = await getCategories();

  return (
    <>
      <div className="container mx-auto px-4 pt-16 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
          Find The Right AI Tool
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Your compass to the world of AI in Fintech. Discover, filter, and
          find the perfect tool to revolutionize your financial services.
        </p>
      </div>
      <div className="container mx-auto px-4 pb-8">
        <Suspense fallback={<p>Loading tools...</p>}>
          <ToolList tools={tools} categories={categories} />
        </Suspense>
      </div>
    </>
  );
}
