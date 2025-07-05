import { getToolById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { SuggestedInsights } from '@/components/tools/suggested-insights';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const tool = await getToolById(params.id);
  if (!tool) {
    return { title: 'Tool Not Found' };
  }
  return {
    title: `${tool.name} | AIFinTechInsights.com`,
    description: tool.description,
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const tool = await getToolById(params.id);

  if (!tool) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <header className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              {tool.logoUrl && (
                <Image
                  src={tool.logoUrl}
                  alt={`${tool.name} logo`}
                  width={64}
                  height={64}
                  className="rounded-xl border"
                  data-ai-hint="logo"
                />
              )}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-primary">{tool.name}</h1>
                <p className="text-lg text-muted-foreground">
                  by {tool.company}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tool.category.map(cat => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>
          </header>

          <article className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Insight & Accomplishment
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {tool.accomplishment}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <Card>
            <CardHeader>
              <CardTitle>Visit Website</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={tool.websiteUrl} target="_blank">
                  Go to {tool.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <SuggestedInsights
            toolCategory={tool.category.join(', ')}
            toolDescription={tool.accomplishment}
          />
        </aside>
      </div>
    </div>
  );
}
