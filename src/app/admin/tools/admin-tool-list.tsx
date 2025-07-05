'use client';

import { useState, useMemo } from 'react';
import type { Tool } from '@/lib/definitions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Pencil, Search } from 'lucide-react';

interface AdminToolListProps {
  tools: Tool[];
}

export function AdminToolList({ tools }: AdminToolListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;
      return tool.name.toLowerCase().includes(query);
    });
  }, [tools, searchQuery]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-foreground">
        Existing Tools
      </h3>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for a tool..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="pl-10 w-full"
        />
      </div>

      <div className="rounded-lg border">
        {filteredTools.length > 0 ? (
          filteredTools.map(tool => (
            <div
              key={tool.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4 border-b last:border-b-0"
            >
              <span className="font-medium text-card-foreground flex-1">
                {tool.name}
              </span>
              <div className="flex gap-2 shrink-0 self-end sm:self-center">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/edit/${tool.id}`}>
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Link>
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-muted-foreground">
            No tools found for your search.
          </div>
        )}
      </div>
    </div>
  );
}
