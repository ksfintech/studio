
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { updateAgentAction } from '@/app/admin/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import type { Agent } from '@/lib/definitions';
import { Loader2 } from 'lucide-react';
import { MultiSelect, type MultiSelectOption } from '@/components/ui/multi-select';

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters.' }),
  category: z
    .array(z.string())
    .min(1, { message: 'Please select at least one category.' }),
  accomplishment: z
    .string()
    .min(10, { message: 'Accomplishment must be at least 10 characters.' }),
  features: z
    .string()
    .min(1, { message: 'Please enter at least one feature (comma-separated).' }),
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters.' }),
  websiteUrl: z.string().url({ message: 'Please enter a valid URL.' }),
  logoUrl: z
    .string()
    .url({ message: 'Please enter a valid URL.' })
    .optional()
    .or(z.literal('')),
});

type FormValues = z.infer<typeof FormSchema>;

export function EditAgentForm({
  agent,
  allCategories,
}: {
  agent: Agent;
  allCategories: string[];
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: agent.id,
      name: agent.name,
      description: agent.description,
      category: agent.category,
      accomplishment: agent.accomplishment,
      features: agent.features.join(', '),
      company: agent.company,
      websiteUrl: agent.websiteUrl,
      logoUrl: agent.logoUrl || '',
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    const result = await updateAgentAction(values);

    if (result?.success === false) {
      toast({
        variant: 'destructive',
        title: 'Error updating agent',
        description: result.message,
      });
      setIsSubmitting(false);
    }
  }

  const categoryOptions: MultiSelectOption[] = allCategories.map(category => ({
    value: category,
    label: category,
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <input type="hidden" {...form.register('id')} />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Feedzai Risk Engine" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A brief, one-sentence summary of what the agent does."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <MultiSelect
                  options={categoryOptions}
                  selected={field.value}
                  onChange={field.onChange}
                  placeholder="Select categories..."
                  className="w-full"
                />
              </FormControl>
              <FormDescription>
                Select one or more relevant categories.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accomplishment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Accomplishment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A concise paragraph explaining what the agent accomplishes."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key Features</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., Real-time monitoring, Behavioral biometrics"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide a comma-separated list of key features.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Feedzai" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="logoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo URL (Optional)</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="https://example.com/logo.png"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? 'Updating Agent...' : 'Update Agent'}
        </Button>
      </form>
    </Form>
  );
}
