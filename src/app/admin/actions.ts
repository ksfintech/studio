
'use server';

import { z } from 'zod';
import { addTool, updateTool, setFeaturedTools, deleteTool } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Tool } from '@/lib/definitions';

const CreateFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  category: z.array(z.string()).min(1, {
    message: 'Please select at least one category.',
  }),
  accomplishment: z.string(),
  features: z.string(),
  company: z.string(),
  websiteUrl: z.string(),
  logoUrl: z.string().optional(),
});

type CreateToolInput = z.infer<typeof CreateFormSchema>;

export async function createToolAction(data: CreateToolInput) {
  const toolData: Omit<Tool, 'id'> = {
    ...data,
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

const UpdateFormSchema = CreateFormSchema.extend({
  id: z.string(),
});

type UpdateToolInput = z.infer<typeof UpdateFormSchema>;

export async function updateToolAction(data: UpdateToolInput) {
  const { id, ...toolContent } = data;
  const toolData: Omit<Tool, 'id'> = {
    ...toolContent,
    features: data.features.split(',').map(s => s.trim()),
    logoUrl: data.logoUrl || undefined,
  };

  try {
    await updateTool(id, toolData);
  } catch (error) {
    console.error('Failed to update tool:', error);
    return {
      success: false,
      message: 'Database error: Failed to update tool.',
    };
  }

  revalidatePath('/');
  revalidatePath('/admin');
  revalidatePath(`/tools/${id}`);
  redirect('/admin');
}

export async function setFeaturedToolsAction(toolIds: string[]) {
  try {
    await setFeaturedTools(toolIds);
    revalidatePath('/');
    return {
      success: true,
      message: 'Featured tools updated successfully.',
    };
  } catch (error) {
    console.error('Failed to set featured tools:', error);
    return {
      success: false,
      message: 'Database error: Failed to set featured tools.',
    };
  }
}

export async function deleteToolAction(id: string) {
  if (!id) {
    return { success: false, message: 'Tool ID is required.' };
  }
  try {
    await deleteTool(id);
    revalidatePath('/');
    revalidatePath('/admin/tools');
    return { success: true, message: 'Tool deleted successfully.' };
  } catch (error) {
    console.error('Failed to delete tool:', error);
    return {
      success: false,
      message: 'Database error: Failed to delete tool.',
    };
  }
}
