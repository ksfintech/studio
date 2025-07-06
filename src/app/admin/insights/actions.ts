
'use server';

import { z } from 'zod';
import { addInsight, updateInsight, deleteInsight } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Insight } from '@/lib/definitions';

const FormSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  summary: z.string().min(10, { message: 'Summary must be at least 10 characters.' }),
  content: z.string().min(20, { message: 'Content must be at least 20 characters.' }),
});

// Create
const CreateInsightSchema = FormSchema.omit({ id: true });
type CreateInsightInput = z.infer<typeof CreateInsightSchema>;

export async function createInsightAction(data: CreateInsightInput) {
  const validatedFields = CreateInsightSchema.safeParse(data);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    await addInsight(validatedFields.data);
  } catch (error) {
    console.error('Failed to create insight:', error);
    return { success: false, message: 'Database error: Failed to create insight.' };
  }

  revalidatePath('/insights');
  revalidatePath('/admin/insights');
  redirect('/admin/insights');
}

// Update
const UpdateInsightSchema = FormSchema;
type UpdateInsightInput = z.infer<typeof UpdateInsightSchema>;

export async function updateInsightAction(data: UpdateInsightInput) {
    const validatedFields = UpdateInsightSchema.safeParse(data);
    if (!validatedFields.success || !validatedFields.data.id) {
        return { success: false, message: 'Invalid data provided.' };
    }

    const { id, ...insightContent } = validatedFields.data;

    try {
        await updateInsight(id, insightContent);
    } catch (error) {
        console.error('Failed to update insight:', error);
        return { success: false, message: 'Database error: Failed to update insight.' };
    }

    revalidatePath('/insights');
    revalidatePath(`/insights/${id}`);
    revalidatePath('/admin/insights');
    redirect('/admin/insights');
}

// Delete
export async function deleteInsightAction(id: string) {
    if (!id) {
        return { success: false, message: 'Insight ID is required.' };
    }
    
    try {
        await deleteInsight(id);
        revalidatePath('/insights');
        revalidatePath('/admin/insights');
        return { success: true, message: 'Insight deleted successfully.' };
    } catch (error) {
        console.error('Failed to delete insight:', error);
        return { success: false, message: 'Database error: Failed to delete insight.' };
    }
}
