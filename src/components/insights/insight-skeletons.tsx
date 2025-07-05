import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function InsightCardSkeleton() {
  return (
    <Card className="h-full flex flex-col">
      <Skeleton className="w-full h-[210px]" />
      <CardHeader>
        <Skeleton className="h-5 w-4/5" />
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
      <CardContent>
        <Skeleton className="h-5 w-24" />
      </CardContent>
    </Card>
  );
}

export function InsightListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <InsightCardSkeleton key={i} />
      ))}
    </div>
  );
}
