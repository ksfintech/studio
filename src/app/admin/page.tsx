
import { AddToolForm } from './add-tool-form';
import { SetFeaturedToolForm } from './set-featured-tool-form';
import { getTools, getFeaturedToolId, getCategories } from '@/lib/data';
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

export const metadata: Metadata = {
  title: 'Admin | AIFinTechInsights.com',
  description: 'Manage AI tools in the directory.',
};

export default async function AdminPage() {
  const [tools, featuredToolId, allCategories] = await Promise.all([
    getTools(),
    getFeaturedToolId(),
    getCategories(),
  ]);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Manage Tools</CardTitle>
          <CardDescription>
            Add a new tool or edit an existing one from the list below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full mb-6">
            <AccordionItem value="add-tool">
              <AccordionTrigger>Add a New Tool</AccordionTrigger>
              <AccordionContent className="pt-4">
                <AddToolForm allCategories={allCategories} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">
              Edit Existing Tools
            </h3>
            {tools.map(tool => (
              <div
                key={tool.id}
                className="flex items-center justify-between rounded-lg border bg-card p-4"
              >
                <span className="font-medium text-card-foreground">
                  {tool.name}
                </span>
                <Button asChild variant="outline">
                  <Link href={`/admin/edit/${tool.id}`}>Edit</Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Set Featured Tool</CardTitle>
          <CardDescription>
            Choose which tool is highlighted on the homepage.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SetFeaturedToolForm
            tools={tools}
            currentFeaturedToolId={featuredToolId}
          />
        </CardContent>
      </Card>
    </div>
  );
}
