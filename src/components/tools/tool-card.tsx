
'use client';

import Link from 'next/link';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ExternalLink, CheckCircle2, Eye, ArrowRight } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  // Clicks on interactive elements in the card should not trigger the main link.
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="relative group/card h-full">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover/card:shadow-xl group-hover/card:border-primary bg-card">
        <Link
          href={`/tools/${agent.id}`}
          className="absolute inset-0 z-10"
          aria-label={`View details for ${agent.name}`}
        ></Link>

        {/* Card Header and Content are clickable due to the overlay link */}
        <CardHeader>
          <CardTitle className="text-lg">{agent.name}</CardTitle>
          <CardDescription>{agent.company}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {agent.description}
          </p>
        </CardContent>

        {/* Footer contains buttons that are interactive and sit above the link */}
        <CardFooter
          className="flex-col items-start gap-4 z-20 relative"
          onClick={stopPropagation}
        >
          <div className="flex flex-wrap gap-2">
            {agent.category.map((cat) => (
              <Badge key={cat} variant="secondary">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-2 pt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Eye className="mr-2 h-4 w-4" /> Quick View
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{agent.name}</DialogTitle>
                  <DialogDescription>by {agent.company}</DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto pr-6 -mr-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Insight & Accomplishment
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {agent.accomplishment}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {agent.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <DialogFooter className="pt-4 border-t !justify-between">
                  <Button variant="ghost" asChild>
                    <Link href={`/tools/${agent.id}`}>
                      View Full Page <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild>
                    <a
                      href={agent.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button asChild className="w-full">
              <a
                href={agent.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
