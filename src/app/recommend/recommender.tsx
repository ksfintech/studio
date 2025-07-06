'use client';

import { useState } from 'react';
import type { Agent } from '@/lib/definitions';
import { recommendAgents, type RecommendAgentsOutput } from '@/ai/flows/recommend-agents';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { RecommendationCard } from './recommendation-card';
import { Skeleton } from '@/components/ui/skeleton';

interface AgentRecommenderProps {
  agents: Agent[];
}

type RecommendationResult = RecommendAgentsOutput[number] & { agent: Agent };

export function AgentRecommender({ agents }: AgentRecommenderProps) {
  const { toast } = useToast();
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) {
      toast({
        variant: 'destructive',
        title: 'Input Required',
        description: 'Please describe your business need.',
      });
      return;
    }

    setIsLoading(true);
    setRecommendations([]);

    try {
      const result = await recommendAgents({
        userNeed: userInput,
        // Pass a simplified agent object to the flow
        agents: agents.map(({ id, name, description, accomplishment }) => ({ id, name, description, accomplishment })),
      });

      if (result.length === 0) {
        toast({
          title: "No specific recommendations found",
          description: "We couldn't find a perfect match. Try describing your need differently or browse all agents.",
        });
      } else {
        const populatedResults = result
            .map(rec => {
                const agent = agents.find(a => a.id === rec.agentId);
                return agent ? { ...rec, agent } : null;
            })
            .filter((item): item is RecommendationResult => item !== null);
        
        setRecommendations(populatedResults);
      }
    } catch (error) {
      console.error('Failed to get AI recommendations:', error);
      toast({
        variant: 'destructive',
        title: 'Recommendation Failed',
        description: 'Could not get recommendations. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-4"
      >
        <Textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="e.g., I need a tool to detect credit card fraud in real-time for my e-commerce store."
          rows={4}
          className="text-base"
          disabled={isLoading}
        />
        <Button
          type="submit"
          className="w-full h-12 text-lg"
          disabled={isLoading || !userInput.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Get Recommendations
            </>
          )}
        </Button>
      </form>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex h-full flex-col">
                <div className="mb-4 space-y-2 rounded-lg border border-dashed border-muted-foreground/50 bg-accent p-4">
                  <div className="flex items-start gap-3">
                    <Skeleton className="mt-1 h-5 w-5 shrink-0 rounded-full" />
                    <div className="w-full space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  </div>
                </div>
                <Skeleton className="flex-grow rounded-lg border p-6 bg-card h-[340px]" />
              </div>
            ))}
        </div>
      )}

      {recommendations.length > 0 && (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8">
                Here are your top recommendations:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {recommendations.map(rec => (
                    <RecommendationCard 
                        key={rec.agentId}
                        agent={rec.agent}
                        justification={rec.justification}
                    />
                ))}
            </div>
        </div>
      )}
    </div>
  );
}
