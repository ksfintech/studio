
import { SetFeaturedToolForm } from '../set-featured-tool-form';
import { getTools, getFeaturedToolIds } from '@/lib/data';
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
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Site Settings | AIFinTechInsights.com',
  description: 'Manage site-wide settings.',
};

export default async function SettingsPage() {
  const [tools, featuredToolIds] = await Promise.all([
    getTools(),
    getFeaturedToolIds(),
  ]);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Button asChild variant="ghost" className="mb-4 -ml-4">
        <Link href="/admin">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Admin Dashboard
        </Link>
      </Button>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Set Featured Tools</CardTitle>
            <CardDescription>
              Choose which tools are highlighted on the homepage carousel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SetFeaturedToolForm
              tools={tools}
              currentFeaturedToolIds={featuredToolIds}
            />
          </CardContent>
        </Card>

        {/* This is where future settings cards would go */}
      </div>
    </div>
  );
}
