'use server';

import { z } from 'zod';
import { addTool } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Tool } from '@/lib/definitions';

const FormSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  accomplishment: z.string(),
  features: z.string(),
  company: z.string(),
  websiteUrl: z.string(),
  logoUrl: z.string().optional(),
});

type CreateToolInput = z.infer<typeof FormSchema>;

export async function createToolAction(data: CreateToolInput) {
  // Although the client validates, we shouldn't trust it.
  // In a real app, you'd re-validate here. For this prototype, we'll proceed.

  const toolData: Omit<Tool, 'id'> = {
    ...data,
    category: data.category.split(',').map(s => s.trim()),
    features: data.features.split(',').map(s => s.trim()),
    logoUrl: data.logoUrl || undefined,
  };

  try {
    await addTool(toolData);
  } catch (error) {
    console.error('Failed to create tool:', error);
    return {
      success: false,
      message: 'Database error: Failed to create tool.',
    };
  }

  // On successful creation, revalidate the cache for the homepage
  // and redirect the user there.
  revalidatePath('/');
  redirect('/');
}
