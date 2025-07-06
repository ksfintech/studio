'use client';

import { useState, useMemo } from 'react';
import type { Agent } from '@/lib/definitions';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AgentCard } from './tool-card';
import { Search } from 'lucide-react';

interface AgentListProps {
  agents: Agent[];
  categories: string[];
}

export function AgentList({ agents, categories }: AgentListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAgents = useMemo(() => {
    return agents
      .filter(agent => {
        if (selectedCategory === 'all') return true;
        return agent.category.includes(selectedCategory);
      })
      .filter(agent => {
        const query = searchQuery.toLowerCase();
        return (
          agent.name.toLowerCase().includes(query) ||
          agent.description.toLowerCase().includes(query) ||
          agent.company.toLowerCase().includes(query)
        );
      });
  }, [agents, searchQuery, selectedCategory]);

  return (
    <div>
      <div className="sticky top-[57px] z-40 bg-background/80 backdrop-blur-lg py-4 mb-12 border-b border-border -mx-4 px-4">
        <div className="container mx-auto px-0 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search over 15 AI agents..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 w-full h-12 text-base"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[240px] h-12 text-base">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAgents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-foreground">
            No agents found
          </p>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
