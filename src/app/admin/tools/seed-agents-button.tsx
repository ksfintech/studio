'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { seedNewAgentsAction } from '../actions';
import { useToast } from '@/hooks/use-toast';
import { Database, Loader2 } from 'lucide-react';

export function SeedAgentsButton() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSeedAgents = async () => {
    setIsLoading(true);
    try {
      const result = await seedNewAgentsAction();
      if (result.success) {
        toast({
          title: 'Success!',
          description: result.message,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to seed new agents.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSeedAgents}
      disabled={isLoading}
      variant="outline"
      className="w-full sm:w-auto"
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Database className="mr-2 h-4 w-4" />
      )}
      {isLoading ? 'Seeding Agents...' : 'Seed New Agents'}
    </Button>
  );
} 