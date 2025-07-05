'use client';

import { useState, useEffect } from 'react';
import { suggestRelatedInsights } from '@/ai/flows/suggest-related-insights';
import type { SuggestRelatedInsightsOutput } from '@/ai/flows/suggest-related-insights';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SuggestedInsightsProps {
  toolCategory: string;
  toolDescription: string;
}

export function SuggestedInsights({
  toolCategory,
  toolDescription,
}: SuggestedInsightsProps) {
  const [suggestions, setSuggestions] =
    useState<SuggestRelatedInsightsOutput>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchSuggestions() {
      try {
        setIsLoading(true);
        const result = await suggestRelatedInsights({
          toolCategory,
          toolDescription,
        });
        setSuggestions(result);
      } catch (error) {
        console.error('Failed to fetch AI suggestions:', error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Could not load AI-powered suggestions.',
        });
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSuggestions();
  }, [toolCategory, toolDescription, toast]);

  return (
    <Card className="bg-secondary/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <CardTitle>Related Insights</CardTitle>
        </div>
        <CardDescription>
          AI-powered suggestions for further reading.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}

          {!isLoading && suggestions.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No related insights found.
            </p>
          )}

          {!isLoading &&
            suggestions.map((suggestion, index) => (
              <div key={index} className="pb-4 border-b last:border-b-0">
                <h4 className="font-semibold mb-1">{suggestion.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {suggestion.summary}
                </p>
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}
