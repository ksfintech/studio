'use client';

import { useState, useMemo } from 'react';
import type { Insight } from '@/lib/definitions';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { InsightCard } from './insight-card';

interface InsightListProps {
  insights: Insight[];
}

export function InsightList({ insights }: InsightListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInsights = useMemo(() => {
    return insights.filter(insight => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;
      return (
        insight.title.toLowerCase().includes(query) ||
        insight.summary.toLowerCase().includes(query)
      );
    });
  }, [insights, searchQuery]);

  return (
    <div>
      <div className="sticky top-[57px] z-40 bg-background/90 backdrop-blur-lg py-4 mb-8 -mx-4 px-4 border-b">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search insights by title or keyword..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="pl-10 w-full h-12 text-base"
            />
          </div>
        </div>
      </div>

      {filteredInsights.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInsights.map(insight => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-semibold text-foreground">
            No insights found
          </p>
          <p className="text-muted-foreground">
            Try adjusting your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
