import { getAgentById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { AgentLogo } from '@/components/tools/AgentLogo';
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
  const agent = await getAgentById(params.id);
  if (!agent) {
    return { title: 'Agent Not Found' };
  }
  return {
    title: `${agent.name} | AI FinTech Insights`,
    description: agent.description,
  };
}

export default async function AgentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const agent = await getAgentById(params.id);

  if (!agent) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <header className="mb-8">
            <div className="flex items-start gap-4 mb-4">
              {agent.logoUrl ? (
                <AgentLogo logoUrl={agent.logoUrl} company={agent.company} size={80} />
              ) : (
                <div className="w-20 h-20 rounded-xl border border-border bg-muted flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-muted-foreground">
                    {agent.company.charAt(0)}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-primary">{agent.name}</h1>
                <p className="text-lg text-muted-foreground">
                  by {agent.company}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {agent.category.map(cat => (
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
                {agent.accomplishment}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {agent.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {agent.useCases && agent.useCases.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
                <ul className="space-y-2">
                  {agent.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0" />
                      <span className="text-foreground/80">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 self-start">
          <Card>
            <CardHeader>
              <CardTitle>Visit Website</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={agent.websiteUrl} target="_blank">
                  Go to {agent.name}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <SuggestedInsights
            agentCategory={agent.category.join(', ')}
            agentDescription={agent.accomplishment}
          />
        </aside>
      </div>
    </div>
  );
}
