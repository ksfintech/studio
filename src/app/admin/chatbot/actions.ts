'use server';

import { db } from '@/lib/firebase';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

export async function addChatbotContext(prevState: { message: string }, formData: FormData) {
    const context = formData.get('context') as string;

    if (!context || context.trim() === '') {
        return { message: 'Context cannot be empty.' };
    }

    try {
        const contextsCollection = collection(db, 'chatbot-context');
        await addDoc(contextsCollection, {
            text: context,
            createdAt: new Date(),
        });

        revalidatePath('/admin/chatbot');
        return { message: 'Successfully added new context.' };
    } catch (e) {
        console.error(e);
        return { message: 'Failed to add context.' };
    }
}

export async function deleteChatbotContext(id: string) {
    try {
        const docRef = doc(db, 'chatbot-context', id);
        await deleteDoc(docRef);
        revalidatePath('/admin/chatbot');
    } catch (e) {
        console.error('Failed to delete context', e);
    }
} 