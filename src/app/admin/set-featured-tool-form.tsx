
'use client';

import { useState, useTransition } from 'react';
import { setFeaturedAgentsAction } from './actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Agent } from '@/lib/definitions';
import { Loader2 } from 'lucide-react';
import { MultiSelect, type MultiSelectOption } from '@/components/ui/multi-select';

interface SetFeaturedAgentsFormProps {
  agents: Agent[];
  currentFeaturedAgentIds: string[];
}

export function SetFeaturedAgentForm({
  agents,
  currentFeaturedAgentIds,
}: SetFeaturedAgentsFormProps) {
  const { toast } = useToast();
  const [selectedAgentIds, setSelectedAgentIds] = useState<string[]>(
    currentFeaturedAgentIds
  );
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await setFeaturedAgentsAction(selectedAgentIds);
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
    });
  };

  const agentOptions: MultiSelectOption[] = agents
    .map(agent => ({
      value: agent.id,
      label: agent.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="agent-select-trigger"
          className="block text-sm font-medium mb-2"
        >
          Select Featured Agents
        </label>
        <MultiSelect
          options={agentOptions}
          selected={selectedAgentIds}
          onChange={setSelectedAgentIds}
          placeholder="Select agents to feature..."
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? 'Saving...' : 'Set Featured Agents'}
      </Button>
    </form>
  );
}
