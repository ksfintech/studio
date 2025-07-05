import Link from 'next/link';
import Image from 'next/image';
import type { Insight } from '@/lib/definitions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface InsightCardProps {
  insight: Insight;
}

export function InsightCard({ insight }: InsightCardProps) {
  return (
    <Link href={`/insights/${insight.id}`} className="block group">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-primary">
        {insight.imageUrl && (
          <div className="overflow-hidden">
            <Image
              src={insight.imageUrl}
              alt={insight.title}
              width={400}
              height={210}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="finance technology"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="leading-tight">{insight.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription>{insight.summary}</CardDescription>
        </CardContent>
        <CardContent>
          <Button variant="link" className="px-0">
            Read more <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
