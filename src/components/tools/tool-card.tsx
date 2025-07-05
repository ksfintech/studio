import Link from 'next/link';
import Image from 'next/image';
import type { Tool } from '@/lib/definitions';
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

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="relative group/card h-full">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover/card:shadow-xl group-hover/card:border-primary/50 group-hover/card:-translate-y-1 bg-card">
        <Link
          href={`/tools/${tool.id}`}
          className="absolute inset-0 z-0"
          aria-label={`View details for ${tool.name}`}
        ></Link>
        <CardHeader>
          <div className="flex items-center gap-4">
            {tool.logoUrl && (
              <Image
                src={tool.logoUrl}
                alt={`${tool.name} logo`}
                width={50}
                height={50}
                className="rounded-lg border bg-white p-1"
                data-ai-hint="logo"
              />
            )}
            <div className="flex-1">
              <CardTitle className="text-lg">{tool.name}</CardTitle>
              <CardDescription>{tool.company}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {tool.description}
          </p>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <div className="flex flex-wrap gap-2">
            {tool.category.map(cat => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="w-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pt-2 z-10 relative">
            <Button asChild className="w-full">
              <a
                href={tool.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                Visit Website
                <ExternalLink />
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
