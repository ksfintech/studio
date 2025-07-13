'use client';

import { useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { addChatbotContext } from './actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending ? 'Adding Context...' : 'Add Context'}
        </Button>
    );
}

export function AddChatbotContextForm() {
    const [state, formAction] = useActionState(addChatbotContext, { message: '' });
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Add New Context</CardTitle>
                <CardDescription>
                    Add a new piece of information to the chatbot's knowledge base. 
                    This can be a paragraph, a Q&A pair, or any other text.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form 
                    ref={formRef}
                    action={async (formData) => {
                        await formAction(formData);
                        formRef.current?.reset();
                    }} 
                    className="space-y-4"
                >
                    <Textarea
                        name="context"
                        placeholder="Enter any information you want the chatbot to know. For example: 'The ROI calculator helps users determine the profitability of an investment.'"
                        rows={4}
                        required
                    />
                    <SubmitButton />
                </form>
                 {state?.message && (
                    <Alert className="mt-4">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Server Message</AlertTitle>
                        <AlertDescription>
                            {state.message}
                        </AlertDescription>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
} 