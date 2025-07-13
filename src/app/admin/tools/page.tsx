
import { AddAgentForm } from '../add-tool-form';
import { getAgents, getCategories } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import { AdminAgentList } from './admin-tool-list';
import { SeedAgentsButton } from './seed-agents-button';
import { UpdateLogoUrlsButton } from './update-logo-urls-button';

export const metadata: Metadata = {
  title: 'Manage Agents | AIFinTechInsights.com',
  description: 'Add, edit, or delete agents in the directory.',
};

export default async function ManageAgentsPage() {
  const [agents, allCategories] = await Promise.all([
    getAgents(),
    getCategories(),
  ]);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 space-y-8">
      <Button asChild variant="ghost" className="-ml-4">
        <Link href="/admin">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Admin Dashboard
        </Link>
      </Button>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Manage Agents</CardTitle>
          <CardDescription>
            Add a new agent or edit an existing one from the list below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-medium">Database Management</h3>
              <p className="text-sm text-muted-foreground">
                Add new agents from the placeholder data to your database
              </p>
            </div>
            <div className="flex gap-2">
              <UpdateLogoUrlsButton />
              <SeedAgentsButton />
            </div>
          </div>
          
          <AdminAgentList agents={agents} />

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="add-agent">
              <AccordionTrigger>Add a New Agent</AccordionTrigger>
              <AccordionContent className="pt-4">
                <AddAgentForm allCategories={allCategories} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
