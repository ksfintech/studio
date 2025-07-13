import type { Agent } from '@/lib/definitions';
import { AgentCard } from '@/components/tools/tool-card';
import { Lightbulb } from 'lucide-react';

interface RecommendationCardProps {
  agent: Agent;
  justification: string;
}

export function RecommendationCard({
  agent,
  justification,
}: RecommendationCardProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 rounded-lg border border-dashed border-primary/50 bg-accent p-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        <div className="flex items-start gap-3">
          <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-primary" />
          <blockquote className="italic text-accent-foreground/90">
            &quot;{justification}&quot;
          </blockquote>
        </div>
      </div>
      <div className="flex-grow">
        <AgentCard agent={agent} />
      </div>
    </div>
  );
}
