import { getTools, getCategories } from '@/lib/data';
import { ToolList } from '@/components/tools/tool-list';
import { Suspense } from 'react';

export default async function Home() {
  const tools = await getTools();
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          AI Fintech Tools Directory
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the latest AI-powered tools revolutionizing the finance
          industry. Search by keyword or filter by category to find the right
          solution for you.
        </p>
      </div>
      <Suspense fallback={<p>Loading tools...</p>}>
        <ToolList tools={tools} categories={categories} />
      </Suspense>
    </div>
  );
}
