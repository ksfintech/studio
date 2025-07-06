
'use client';

import { useState, useTransition } from 'react';
import { setFeaturedToolsAction } from './actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Tool } from '@/lib/definitions';
import { Loader2 } from 'lucide-react';
import { MultiSelect, type MultiSelectOption } from '@/components/ui/multi-select';

interface SetFeaturedToolsFormProps {
  tools: Tool[];
  currentFeaturedToolIds: string[];
}

export function SetFeaturedToolForm({
  tools,
  currentFeaturedToolIds,
}: SetFeaturedToolsFormProps) {
  const { toast } = useToast();
  const [selectedToolIds, setSelectedToolIds] = useState<string[]>(
    currentFeaturedToolIds
  );
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await setFeaturedToolsAction(selectedToolIds);
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

  const toolOptions: MultiSelectOption[] = tools
    .map(tool => ({
      value: tool.id,
      label: tool.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="tool-select-trigger"
          className="block text-sm font-medium mb-2"
        >
          Select Featured Tools
        </label>
        <MultiSelect
          options={toolOptions}
          selected={selectedToolIds}
          onChange={setSelectedToolIds}
          placeholder="Select tools to feature..."
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="w-full sm:w-auto"
      >
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isPending ? 'Saving...' : 'Set Featured Tools'}
      </Button>
    </form>
  );
}
