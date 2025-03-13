"use client";
import { StatsLoadingContainer } from "@/components/admin/Loading";
import LoadingTable from "@/components/booking/LoadingTable";

function loading() {
  return (
    <>
      <StatsLoadingContainer size="mb-16" />
      <LoadingTable />;
    </>
  );
}

export default loading;
