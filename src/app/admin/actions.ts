
'use server';

import { z } from 'zod';
import { addTool, setFeaturedTool } from '@/lib/data';
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

  revalidatePath('/');
  redirect('/');
}

export async function setFeaturedToolAction(formData: FormData) {
  const toolId = formData.get('toolId') as string;

  if (!toolId) {
    return {
      success: false,
      message: 'Tool ID is required.',
    };
  }

  try {
    await setFeaturedTool(toolId);
    revalidatePath('/');
    return {
      success: true,
      message: 'Featured tool updated successfully.',
    };
  } catch (error) {
    console.error('Failed to set featured tool:', error);
    return {
      success: false,
      message: 'Database error: Failed to set featured tool.',
    };
  }
}
