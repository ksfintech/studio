
'use server';

import { z } from 'zod';
import { addAgent, updateAgent, setFeaturedAgents, deleteAgent, seedNewAgents } from '@/lib/data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { Agent } from '@/lib/definitions';

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

type CreateAgentInput = z.infer<typeof CreateFormSchema>;

export async function createAgentAction(data: CreateAgentInput) {
  const agentData: Omit<Agent, 'id'> = {
    ...data,
    features: data.features.split(',').map(s => s.trim()),
    logoUrl: data.logoUrl || undefined,
  };

  try {
    await addAgent(agentData);
  } catch (error) {
    console.error('Failed to create agent:', error);
    return {
      success: false,
      message: 'Database error: Failed to create agent.',
    };
  }

  revalidatePath('/');
  redirect('/');
}

const UpdateFormSchema = CreateFormSchema.extend({
  id: z.string(),
});

type UpdateAgentInput = z.infer<typeof UpdateFormSchema>;

export async function updateAgentAction(data: UpdateAgentInput) {
  const { id, ...agentContent } = data;
  const agentData: Omit<Agent, 'id'> = {
    ...agentContent,
    features: data.features.split(',').map(s => s.trim()),
    logoUrl: data.logoUrl || undefined,
  };

  try {
    await updateAgent(id, agentData);
  } catch (error) {
    console.error('Failed to update agent:', error);
    return {
      success: false,
      message: 'Database error: Failed to update agent.',
    };
  }

  revalidatePath('/');
  revalidatePath('/admin');
  revalidatePath(`/tools/${id}`);
  redirect('/admin');
}

export async function setFeaturedAgentsAction(agentIds: string[]) {
  try {
    await setFeaturedAgents(agentIds);
    revalidatePath('/');
    return {
      success: true,
      message: 'Featured agents updated successfully.',
    };
  } catch (error) {
    console.error('Failed to set featured agents:', error);
    return {
      success: false,
      message: 'Database error: Failed to set featured agents.',
    };
  }
}

export async function deleteAgentAction(id: string) {
  if (!id) {
    return { success: false, message: 'Agent ID is required.' };
  }
  try {
    await deleteAgent(id);
    revalidatePath('/');
    revalidatePath('/admin/tools');
    return { success: true, message: 'Agent deleted successfully.' };
  } catch (error) {
    console.error('Failed to delete agent:', error);
    return {
      success: false,
      message: 'Database error: Failed to delete agent.',
    };
  }
}

export async function seedNewAgentsAction() {
  try {
    await seedNewAgents();
    revalidatePath('/');
    revalidatePath('/admin/tools');
    return { success: true, message: 'New agents seeded successfully.' };
  } catch (error) {
    console.error('Failed to seed new agents:', error);
    return {
      success: false,
      message: 'Database error: Failed to seed new agents.',
    };
  }
}

export async function updateLogoUrlsAction() {
  try {
    // Import the data function that will update logo URLs
    const { updateLogoUrls } = await import('@/lib/data');
    await updateLogoUrls();
    revalidatePath('/');
    revalidatePath('/admin/tools');
    return { success: true, message: 'Logo URLs updated successfully.' };
  } catch (error) {
    console.error('Failed to update logo URLs:', error);
    return {
      success: false,
      message: 'Database error: Failed to update logo URLs.',
    };
  }
}
