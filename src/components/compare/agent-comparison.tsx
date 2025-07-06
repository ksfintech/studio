
'use client';

import { useState, useMemo } from 'react';
import type { Agent } from '@/lib/definitions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

interface AgentComparisonProps {
  agents: Agent[];
  categories: string[];
}

export function AgentComparison({ agents, categories }: AgentComparisonProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    categories[0]
  );

  const filteredAgents = useMemo(() => {
    if (!selectedCategory) return [];
    return agents.filter(agent => agent.category.includes(selectedCategory));
  }, [agents, selectedCategory]);

  return (
    <div className="space-y-8 pb-16">
      <div className="max-w-md mx-auto">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-full h-12 text-base">
            <SelectValue placeholder="Select a category to compare..." />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCategory && filteredAgents.length > 0 && (
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30">
                  <TableHead className="min-w-[250px] p-6 font-semibold text-foreground">Agent</TableHead>
                  <TableHead className="min-w-[300px] p-6 font-semibold text-foreground">Summary</TableHead>
                  <TableHead className="min-w-[400px] p-6 font-semibold text-foreground">Best Suited For</TableHead>
                  <TableHead className="min-w-[350px] p-6 font-semibold text-foreground">Key Features</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgents.map(agent => (
                  <TableRow key={agent.id} className="[&_td]:p-6">
                    <TableCell className="font-medium align-top">
                      <div className="flex items-start gap-4">
                        {agent.logoUrl && (
                          <Image
                            src={
                              agent.logoUrl.startsWith('http')
                                ? agent.logoUrl
                                : 'https://placehold.co/48x48/324A80.png'
                            }
                            alt={`${agent.name} logo`}
                            width={48}
                            height={48}
                            className="rounded-lg border bg-white p-1"
                            data-ai-hint="logo"
                          />
                        )}
                        <div className="flex-1">
                          <Button asChild variant="link" className="p-0 h-auto font-semibold text-lg">
                            <Link href={`/tools/${agent.id}`}>{agent.name}</Link>
                          </Button>
                          <p className="text-sm text-muted-foreground">
                            by {agent.company}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground align-top">
                      {agent.description}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground align-top">
                      {agent.accomplishment}
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="space-y-2">
                        {agent.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}

      {selectedCategory && filteredAgents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-foreground">
            No agents found in this category
          </p>
          <p className="text-muted-foreground">
            Please select another category to compare.
          </p>
        </div>
      )}
    </div>
  );
}
