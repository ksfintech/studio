
import { AddToolForm } from './add-tool-form';
import { SetFeaturedToolForm } from './set-featured-tool-form';
import { getTools, getFeaturedToolId } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin | Fintech AI Compass',
  description: 'Manage AI tools in the directory.',
};

export default async function AdminPage() {
  const tools = await getTools();
  const featuredToolId = await getFeaturedToolId();

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
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

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Add a New AI Tool</CardTitle>
          <CardDescription>
            Fill out the form below to add a new tool to the directory.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AddToolForm />
        </CardContent>
      </Card>
    </div>
  );
}
