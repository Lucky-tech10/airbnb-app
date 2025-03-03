import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section>
      <div className="flex justify-between items-center mt-6">
        <Skeleton className="h-6 w-3/4 rounded" />
        <div className="flex items-center gap-x-3">
          <Skeleton className="h-6 w-6 rounded" />
          <Skeleton className="h-6 w-6 rounded" />
        </div>
      </div>
      <Skeleton className="h-[300px] md:h-[500px] w-full rounded mt-4" />
    </section>
  );
};

export default loading;
