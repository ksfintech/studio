
'use client';

import { useState } from 'react';
import { setFeaturedToolsAction } from './actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Tool } from '@/lib/definitions';
import { Loader2 } from 'lucide-react';
import { MultiSelect } from '@/components/ui/multi-select';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
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
    setIsSubmitting(false);
  };

  const toolOptions = tools.map(t => t.name).sort();
  const toolNameToIdMap = new Map(tools.map(t => [t.name, t.id]));
  const toolIdToNameMap = new Map(tools.map(t => [t.id, t.name]));

  const selectedToolNames = selectedToolIds.map(id => toolIdToNameMap.get(id)).filter((name): name is string => !!name);

  const handleSelectionChange = (newSelectedNames: string[]) => {
    const newSelectedIds = newSelectedNames.map(name => toolNameToIdMap.get(name)).filter((id): id is string => !!id);
    setSelectedToolIds(newSelectedIds);
  };

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
          selected={selectedToolNames}
          onChange={handleSelectionChange}
          placeholder="Select tools to feature..."
          className="w-full"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Saving...' : 'Set Featured Tools'}
      </Button>
    </form>
  );
}
