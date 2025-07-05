import Link from 'next/link';
import Image from 'next/image';
import type { Tool } from '@/lib/definitions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

interface FeaturedToolProps {
  tool: Tool;
}

export function FeaturedTool({ tool }: FeaturedToolProps) {
  return (
    <section aria-labelledby="featured-tool-heading">
      <div className="mb-8 text-center">
        <h2
          id="featured-tool-heading"
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Featured Tool
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Check out this week&apos;s highlighted tool for innovation in Fintech.
        </p>
      </div>
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center justify-center md:col-span-1">
            {tool.logoUrl && (
              <Image
                src={tool.logoUrl}
                alt={`${tool.name} logo`}
                width={150}
                height={150}
                className="rounded-2xl border bg-white p-2"
                data-ai-hint="logo"
              />
            )}
          </div>
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-primary">{tool.name}</h3>
            <p className="mt-1 text-muted-foreground">by {tool.company}</p>
            <div className="my-4 flex flex-wrap gap-2">
              {tool.category.map(cat => (
                <Badge key={cat} variant="secondary">
                  {cat}
                </Badge>
              ))}
            </div>
            <p className="mt-4 leading-relaxed text-foreground/80">
              {tool.accomplishment}
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href={`/tools/${tool.id}`}>
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
