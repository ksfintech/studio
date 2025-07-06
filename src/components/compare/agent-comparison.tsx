
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
        <Card>
          <CardHeader>
            <CardTitle>Comparison for: {selectedCategory}</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[250px]">Agent</TableHead>
                  <TableHead className="min-w-[300px]">Description</TableHead>
                  <TableHead className="min-w-[350px]">Key Features</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgents.map(agent => (
                  <TableRow key={agent.id}>
                    <TableCell className="font-medium align-top">
                      <div className="flex items-start gap-3">
                        {agent.logoUrl && (
                          <Image
                            src={
                              agent.logoUrl.startsWith('http')
                                ? agent.logoUrl
                                : 'https://placehold.co/40x40/324A80.png'
                            }
                            alt={`${agent.name} logo`}
                            width={40}
                            height={40}
                            className="rounded-md border bg-white p-1"
                            data-ai-hint="logo"
                          />
                        )}
                        <div className="flex-1">
                          <Button asChild variant="link" className="p-0 h-auto font-semibold text-base">
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
          </CardContent>
        </Card>
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
