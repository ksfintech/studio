
'use client';

import { useRef, useState } from 'react';
import { setFeaturedToolAction } from './actions';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import type { Tool } from '@/lib/definitions';
import { Loader2 } from 'lucide-react';

interface SetFeaturedToolFormProps {
  tools: Tool[];
  currentFeaturedToolId: string | null;
}

export function SetFeaturedToolForm({
  tools,
  currentFeaturedToolId,
}: SetFeaturedToolFormProps) {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedToolId, setSelectedToolId] = useState<string | null>(
    currentFeaturedToolId
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAction = async (formData: FormData) => {
    setIsSubmitting(true);
    const result = await setFeaturedToolAction(formData);
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

  return (
    <form ref={formRef} action={handleAction} className="space-y-4">
      <input type="hidden" name="toolId" value={selectedToolId ?? ''} />
      <div>
        <label
          htmlFor="tool-select-trigger"
          className="block text-sm font-medium mb-2"
        >
          Select a Tool
        </label>
        <Select
          value={selectedToolId ?? undefined}
          onValueChange={setSelectedToolId}
          name="toolIdSelect" // This name is for accessibility, not form submission
        >
          <SelectTrigger id="tool-select-trigger" className="w-full">
            <SelectValue placeholder="Select a tool to feature" />
          </SelectTrigger>
          <SelectContent>
            {tools.map(tool => (
              <SelectItem key={tool.id} value={tool.id}>
                {tool.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !selectedToolId}
        className="w-full sm:w-auto"
      >
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Saving...' : 'Set Featured Tool'}
      </Button>
    </form>
  );
}
