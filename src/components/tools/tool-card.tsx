
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
import Image from 'next/image';
import { useState } from 'react';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  // Clicks on interactive elements in the card should not trigger the main link.
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="relative group/card h-full">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover/card:shadow-xl group-hover/card:border-primary group-hover/card:scale-105 group-hover/card:-translate-y-1">
        <Link
          href={`/tools/${agent.id}`}
          className="absolute inset-0 z-10"
          aria-label={`View details for ${agent.name}`}
        ></Link>

        {/* Card Header and Content are clickable due to the overlay link */}
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            {agent.logoUrl && !logoError ? (
              <div className="relative w-12 h-12 rounded-lg border border-border overflow-hidden bg-background flex-shrink-0">
                <Image
                  src={agent.logoUrl}
                  alt={`${agent.company} logo`}
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-lg border border-border bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-muted-foreground">
                  {agent.company.charAt(0)}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg truncate">{agent.name}</CardTitle>
              <CardDescription className="truncate">{agent.company}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {agent.description}
          </p>
        </CardContent>

        {/* Separator line */}
        <div className="border-t border-border -mt-4"></div>

        {/* Footer contains buttons that are interactive and sit above the link */}
        <CardFooter
          className="flex-col items-center gap-4 z-20 relative pt-4"
          onClick={stopPropagation}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {agent.pricing === 'free' && (
              <Badge className="bg-green-100 text-green-800 border-green-300 text-xs px-2 py-0.5">
                Free
              </Badge>
            )}
            {agent.pricing === 'paid' && (
              <Badge className="bg-red-100 text-red-800 border-red-300 text-xs px-2 py-0.5">
                Paid
              </Badge>
            )}
            {agent.pricing === 'free+paid' && (
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs px-2 py-0.5">
                Free + Paid
              </Badge>
            )}
            {agent.category.map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs px-2 py-0.5">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-2 pt-2 justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Eye className="mr-2 h-4 w-4" /> Quick View
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-2">
                    {agent.logoUrl && !logoError ? (
                      <div className="relative w-16 h-16 rounded-lg border border-border overflow-hidden bg-background flex-shrink-0">
                        <Image
                          src={agent.logoUrl}
                          alt={`${agent.company} logo`}
                          fill
                          className="object-contain p-2"
                          sizes="64px"
                          onError={() => setLogoError(true)}
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-lg border border-border bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-bold text-muted-foreground">
                          {agent.company.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <DialogTitle className="text-2xl">{agent.name}</DialogTitle>
                      <DialogDescription>by {agent.company}</DialogDescription>
                    </div>
                  </div>
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
                    {agent.useCases && agent.useCases.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Use Cases</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {agent.useCases.map((useCase, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              {useCase}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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

            <Button asChild className="w-full sm:w-auto">
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
