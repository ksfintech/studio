
import { AddToolForm } from '../add-tool-form';
import { getTools, getCategories } from '@/lib/data';
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
import { AdminToolList } from './admin-tool-list';

export const metadata: Metadata = {
  title: 'Manage Tools | AIFinTechInsights.com',
  description: 'Add, edit, or delete tools in the directory.',
};

export default async function ManageToolsPage() {
  const [tools, allCategories] = await Promise.all([
    getTools(),
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
          <CardTitle className="text-2xl">Manage Tools</CardTitle>
          <CardDescription>
            Add a new tool or edit an existing one from the list below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AdminToolList tools={tools} />

          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="add-tool">
              <AccordionTrigger>Add a New Tool</AccordionTrigger>
              <AccordionContent className="pt-4">
                <AddToolForm allCategories={allCategories} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
