import { getChatbotContexts } from '@/lib/data';
import { AddChatbotContextForm } from './add-context-form';
import { DeleteContextButton } from './delete-context-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export const metadata = {
    title: 'Manage Chatbot Context',
};

export default async function AdminChatbotPage() {
    const contexts = await getChatbotContexts();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold">Manage Chatbot Context</h1>
                <p className="text-muted-foreground">
                    Add, remove, and review the knowledge base for the AI Financial Concierge.
                </p>
            </div>

            <AddChatbotContextForm />
            
            <Card>
                <CardHeader>
                    <CardTitle>Current Knowledge Base</CardTitle>
                    <CardDescription>
                        This is the information the chatbot will use to answer user questions.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {contexts.map((context) => (
                            <div key={context.id} className="flex items-start justify-between p-4 border rounded-lg">
                                <p className="text-sm flex-1 pr-4">
                                    <Bot className="w-4 h-4 mr-2 inline-block text-primary" />
                                    {context.text}
                                </p>
                                <DeleteContextButton id={context.id} />
                            </div>
                        ))}
                        {contexts.length === 0 && (
                            <p className="text-sm text-muted-foreground text-center py-8">
                                The chatbot knowledge base is empty. Add some context above to get started.
                            </p>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
} 