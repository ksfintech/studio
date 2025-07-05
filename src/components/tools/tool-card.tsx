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

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.id}`} className="block group">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:border-primary">
        <CardHeader className="flex-row items-start gap-4">
          {tool.logoUrl && (
            <Image
              src={tool.logoUrl}
              alt={`${tool.name} logo`}
              width={50}
              height={50}
              className="rounded-lg border"
              data-ai-hint="logo"
            />
          )}
          <div className="flex-1">
            <CardTitle>{tool.name}</CardTitle>
            <CardDescription>{tool.company}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground">{tool.description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {tool.category.map(cat => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
