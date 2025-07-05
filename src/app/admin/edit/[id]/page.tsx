
import { getToolById, getCategories } from '@/lib/data';
import { notFound } from 'next/navigation';
import { EditToolForm } from './edit-tool-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const tool = await getToolById(params.id);
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }
  return {
    title: `Edit ${tool.name} | Fintech AI Compass`,
    description: `Update the details for the tool: ${tool.name}.`,
  };
}

export default async function EditToolPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [tool, allCategories] = await Promise.all([
    getToolById(id),
    getCategories(),
  ]);

  if (!tool) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Edit {tool.name}</CardTitle>
          <CardDescription>
            Update the details for this tool. Changes will be saved immediately.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditToolForm tool={tool} allCategories={allCategories} />
        </CardContent>
      </Card>
    </div>
  );
}
