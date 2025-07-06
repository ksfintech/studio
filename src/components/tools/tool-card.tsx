
import Link from 'next/link';
import Image from 'next/image';
import type { Agent } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="relative group/card h-full">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover/card:shadow-xl group-hover/card:border-primary group-hover/card:-translate-y-1 bg-card">
        <Link
          href={`/tools/${agent.id}`}
          className="absolute inset-0 z-0"
          aria-label={`View details for ${agent.name}`}
        ></Link>
        <CardHeader>
          <div className="flex items-center gap-4">
            {agent.logoUrl && (
              <Image
                src={
                  agent.logoUrl.startsWith('http')
                    ? agent.logoUrl
                    : 'https://placehold.co/50x50/324A80.png'
                }
                alt={`${agent.name} logo`}
                width={50}
                height={50}
                className="rounded-lg border bg-white p-1"
                data-ai-hint="logo"
              />
            )}
            <div className="flex-1">
              <CardTitle className="text-lg">{agent.name}</CardTitle>
              <CardDescription>{agent.company}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {agent.description}
          </p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex flex-wrap gap-2">
            {agent.category.map(cat => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="w-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pt-2 z-10 relative">
            <Button asChild className="w-full">
              <a
                href={agent.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
