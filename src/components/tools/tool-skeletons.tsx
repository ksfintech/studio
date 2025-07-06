import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function AgentCardSkeleton() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Skeleton className="h-[50px] w-[50px] rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  );
}

export function AgentListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <AgentCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function FeaturedAgentSkeleton() {
  return (
    <section>
      <div className="mb-8 space-y-4 text-center">
        <Skeleton className="h-10 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
      </div>
      <div className="relative rounded-xl border bg-card p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-center justify-center md:col-span-1">
            <Skeleton className="h-[150px] w-[150px] rounded-2xl" />
          </div>
          <div className="md:col-span-2 space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </div>
            <Skeleton className="h-12 w-40 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
