'use client';

import { useFormStatus } from 'react-dom';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteChatbotContext } from './actions';

function DeleteButton() {
    const { pending } = useFormStatus();
    return (
        <Button variant="outline" size="icon" type="submit" disabled={pending} aria-label="Delete context">
            <Trash2 className="h-4 w-4" />
        </Button>
    );
}

export function DeleteContextButton({ id }: { id: string }) {
    const deleteAction = deleteChatbotContext.bind(null, id);
    return (
        <form action={deleteAction}>
            <DeleteButton />
        </form>
    );
} 