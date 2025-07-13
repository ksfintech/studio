
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';
import Link from 'next/link';
import { Bot, Cog, FileText, Pickaxe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Dashboard | AI FinTech Insights',
  description: 'Manage content and settings for the application.',
};

const adminSections = [
    {
        title: 'Tools',
        description: 'Add, edit, or remove AI tools from the main list.',
        href: '/admin/tools',
        icon: Pickaxe,
    },
    {
        title: 'Insights',
        description: 'Create, manage, and publish insight articles.',
        href: '/admin/insights',
        icon: FileText,
    },
    {
        title: 'Chatbot Context',
        description: 'Manage the knowledge base for the AI concierge.',
        href: '/admin/chatbot',
        icon: Bot,
    },
    {
        title: 'Site Settings',
        description: 'Manage global site settings and featured content.',
        href: '/admin/settings',
        icon: Cog,
    }
];

export default function AdminPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome to the control center for AI FinTech Insights.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {adminSections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <Link key={section.href} href={section.href}>
                            <Card className="hover:shadow-lg transition-shadow h-full">
                                <CardHeader>
                                    <div className="mb-4">
                                        <Icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>{section.title}</CardTitle>
                                    <CardDescription>{section.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
