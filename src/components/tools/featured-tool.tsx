
import Link from 'next/link';
import type { Agent } from '@/lib/definitions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

interface FeaturedAgentProps {
  agent: Agent;
}

export function FeaturedAgent({ agent }: FeaturedAgentProps) {
  return (
    <div className="relative rounded-xl border border-primary/20 bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary/50 sm:p-8">
      <div className="absolute top-4 right-4">
        <Badge
          variant="default"
          className="flex items-center gap-2 py-1 pl-2 pr-3 text-base"
        >
          <Star className="h-4 w-4" />
          <span>Featured</span>
        </Badge>
      </div>
      <h3 className="text-3xl font-bold text-primary">{agent.name}</h3>
      <p className="mt-1 text-muted-foreground">by {agent.company}</p>
      <div className="my-4 flex flex-wrap gap-2">
        {agent.category.map(cat => (
          <Badge key={cat} variant="secondary">
            {cat}
          </Badge>
        ))}
      </div>
      <p className="mt-4 leading-relaxed text-foreground/80">
        {agent.accomplishment}
      </p>
      <div className="mt-6">
        <Button asChild size="lg">
          <Link href={`/tools/${agent.id}`}>
            Learn More <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
