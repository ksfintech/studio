import { getInsights } from '@/lib/data';
import { InsightCard } from '@/components/insights/insight-card';
import { Suspense } from 'react';

export const metadata = {
  title: 'AI Fintech Insights | Fintech AI Compass',
  description:
    'Explore articles and summaries about the latest trends and applications of AI in finance.',
};

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
          AI Fintech Insights
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay informed with our curated articles on how AI is shaping the
          future of finance, from trading to compliance.
        </p>
      </div>

      <Suspense fallback={<p>Loading insights...</p>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map(insight => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
