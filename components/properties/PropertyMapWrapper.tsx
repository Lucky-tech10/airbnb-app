"use client";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicMap = dynamic(
  () => import("@/components/properties/PropertyMap"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[400px] w-full" />,
  }
);

export default function PropertyMapWrapper({
  countryCode,
}: {
  countryCode: string;
}) {
  return <DynamicMap countryCode={countryCode} />;
}
