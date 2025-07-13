
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
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FeaturedAgent } from './featured-tool';
import { Button } from '@/components/ui/button';

interface AgentListProps {
  agents: Agent[];
  categories: string[];
  featuredAgents: Agent[];
}

export function AgentList({
  agents,
  categories,
  featuredAgents,
}: AgentListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<'az' | 'za' | 'newest' | 'oldest' | 'popular'>('az');
  const [currentPage, setCurrentPage] = useState(1);
  const agentsPerPage = 15;

  const filteredAgents = useMemo(() => {
    let result = agents
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
    // Sorting logic
    switch (sortOrder) {
      case 'az':
        result = result.slice().sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        result = result.slice().sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        result = result.slice().sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'oldest':
        result = result.slice().sort((a, b) => a.id.localeCompare(b.id));
        break;
      case 'popular':
        // No popularity field yet; leave as-is
        break;
      default:
        break;
    }
    return result;
  }, [agents, searchQuery, selectedCategory, sortOrder]);

  // Reset to first page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOrder]);

  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);
  const startIndex = (currentPage - 1) * agentsPerPage;
  const endIndex = startIndex + agentsPerPage;
  const displayedAgents = filteredAgents.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
          <Select value={sortOrder} onValueChange={v => setSortOrder(v as any)}>
            <SelectTrigger className="w-full sm:w-[200px] h-12 text-base">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="az">A-Z</SelectItem>
              <SelectItem value="za">Z-A</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {featuredAgents.length > 0 && (
        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="featured-agents">
              <AccordionTrigger className="text-2xl font-semibold hover:no-underline">
                Featured Agents
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-6">
                  {featuredAgents.map(agent => (
                    <FeaturedAgent key={agent.id} agent={agent} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">All Agents</h2>
        <p className="text-muted-foreground text-sm mt-1">
          Showing {displayedAgents.length} of {filteredAgents.length} agents.
        </p>
      </div>

      {displayedAgents.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedAgents.map(agent => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
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
