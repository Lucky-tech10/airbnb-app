import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function StatsLoadingContainer({ size }: { size?: string }) {
  return (
    <div className={`mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 ${size}`}>
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
}

function Loading() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-full h-20 rounded" />
      </CardHeader>
    </Card>
  );
}

export function ChartsLoadingContainer() {
  return <Skeleton className="mt-16 w-full rounded h-[300px]" />;
}
