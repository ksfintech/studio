import { getInsightById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const insight = await getInsightById(params.id);
  if (!insight) {
    return { title: 'Insight Not Found' };
  }
  return {
    title: `${insight.title} | Fintech AI Compass`,
    description: insight.summary,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const insight = await getInsightById(params.id);

  if (!insight) {
    notFound();
  }

  return (
    <article>
      <header className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary max-w-4xl mx-auto">
            {insight.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {insight.summary}
          </p>
        </div>
      </header>

      {insight.imageUrl && (
        <div className="container mx-auto px-4 my-8 -mt-12">
          <Image
            src={insight.imageUrl}
            alt={insight.title}
            width={1200}
            height={630}
            className="w-full rounded-lg shadow-lg"
            priority
            data-ai-hint="finance technology"
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div
          className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-foreground/90"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
      </div>
    </article>
  );
}
