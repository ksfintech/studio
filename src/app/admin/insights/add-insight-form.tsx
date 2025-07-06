
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createInsightAction } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { generateInsightArticle } from '@/ai/flows/generate-insight-article';

const FormSchema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  summary: z.string().min(10, { message: 'Summary must be at least 10 characters.' }),
  content: z.string().min(20, { message: 'Content must be at least 20 characters.' }),
});

type FormValues = z.infer<typeof FormSchema>;

export function AddInsightForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiInputText, setAiInputText] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      summary: '',
      content: '',
    },
  });

  async function handleGenerateWithAi() {
    if (!aiInputText.trim()) {
      toast({
        variant: 'destructive',
        title: 'Topic Required',
        description: 'Please enter a topic to generate an article.',
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await generateInsightArticle({ topic: aiInputText });

      form.setValue('title', result.title, { shouldValidate: true });
      form.setValue('summary', result.summary, { shouldValidate: true });
      form.setValue('content', result.content, { shouldValidate: true });

      toast({
        title: 'AI Generation Complete',
        description: 'The form has been populated with a draft. Please review and submit.',
      });
    } catch (error) {
      console.error('Failed to generate insight with AI:', error);
      toast({
        variant: 'destructive',
        title: 'AI Generation Failed',
        description: 'Could not generate the article. Please try again or fill the form manually.',
      });
    } finally {
      setIsGenerating(false);
    }
  }

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    const result = await createInsightAction(values);

    if (result?.success === false) {
      toast({
        variant: 'destructive',
        title: 'Error creating insight',
        description: result.message,
      });
      setIsSubmitting(false);
    } else {
        toast({
            title: 'Success!',
            description: 'Insight created successfully. Redirecting...',
        });
        // The redirect in the action will handle moving the user
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4 rounded-lg border p-4 bg-secondary/50">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Generate with AI</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Enter a topic, and AI will generate a draft for the title, summary, and content.
          </p>
          <Textarea
            placeholder="e.g., The impact of AI on personal budgeting apps"
            value={aiInputText}
            onChange={(e) => setAiInputText(e.target.value)}
            className="bg-background"
            rows={3}
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
              'Generate Article Draft'
            )}
          </Button>
        </div>
        
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="The Role of AI in..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea placeholder="A one-paragraph summary of the article." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <RichTextEditor
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting || isGenerating} className="w-full sm:w-auto">
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isSubmitting ? 'Adding Insight...' : 'Add Insight'}
        </Button>
      </form>
    </Form>
  );
}
