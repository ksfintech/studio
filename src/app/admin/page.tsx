import { AddToolForm } from './add-tool-form';
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
  description: 'Add a new AI tool to the directory.',
};

export default function AdminPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
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
