'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createAgentAction } from './actions';
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
import { MultiSelect, type MultiSelectOption } from '@/components/ui/multi-select';
import { generateAgentDetails } from '@/ai/flows/generate-tool-details';
import { Wand2, Loader2 } from 'lucide-react';

const FormSchema = z.object({
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

export function AddAgentForm({
  allCategories,
}: {
  allCategories: string[];
}) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiInputText, setAiInputText] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      description: '',
      category: [],
      accomplishment: '',
      features: '',
      company: '',
      websiteUrl: '',
      logoUrl: '',
    },
  });

  async function handleGenerateWithAi() {
    if (!aiInputText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Input Required',
        description: 'Please paste some text about the agent to generate details.',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateAgentDetails({
        text: aiInputText,
        existingCategories: allCategories,
      });

      form.setValue('name', result.name, { shouldValidate: true });
      form.setValue('description', result.description, { shouldValidate: true });
      form.setValue('company', result.company, { shouldValidate: true });
      form.setValue('category', result.categories, { shouldValidate: true });
      form.setValue('features', result.features.join(', '), {
        shouldValidate: true,
      });
      form.setValue('accomplishment', result.accomplishment, {
        shouldValidate: true,
      });

      toast({
        title: 'AI Generation Complete',
        description: 'The form has been populated. Please review and submit.',
      });
    } catch (error) {
      console.error('Failed to generate agent details with AI:', error);
      toast({
        variant: 'destructive',
        title: 'AI Generation Failed',
        description: 'Could not generate details. Please try again or fill the form manually.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);

    const result = await createAgentAction(values);

    if (result?.success === false) {
      toast({
        variant: 'destructive',
        title: 'Error creating agent',
        description: result.message,
      });
      setIsSubmitting(false);
    } else {
      toast({
        title: 'Success!',
        description: 'Agent created successfully. Redirecting...',
      });
    }
  }

  const categoryOptions: MultiSelectOption[] = allCategories.map(category => ({
    value: category,
    label: category,
  }));

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4 rounded-lg border p-4 bg-secondary/50">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Generate with AI</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Paste text from the agent's website below, and AI will attempt to
            fill out the form for you.
          </p>
          <Textarea
            placeholder="Paste text here from an agent's 'About' or 'Product' page..."
            value={aiInputText}
            onChange={(e) => setAiInputText(e.target.value)}
            className="bg-background"
            rows={5}
            disabled={isGenerating}
          />
          <Button
            type="button"
            onClick={handleGenerateWithAi}
            disabled={isGenerating || !aiInputText}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Details'
            )}
          </Button>
        </div>

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
                <Input type="url" placeholder="https://example.com" {...field} />
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
                <Input type="url" placeholder="https://example.com/logo.png" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting || isGenerating} className="w-full sm:w-auto">
          {isSubmitting ? 'Adding Agent...' : 'Add Agent'}
        </Button>
      </form>
    </Form>
  );
}
