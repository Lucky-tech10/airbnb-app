"use client";

import { useProperty } from "@/utils/store";
import { Booking } from "@/utils/types";
import { useEffect } from "react";
import BookingCalendar from "./BookingCalendar";
import BookingContainer from "./BookingContainer";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

type BookingWrapperProps = {
  propertyId: string;
  price: number;
  bookings: Booking[];
};

export default function BookingWrapper({
  propertyId,
  price,
  bookings,
}: BookingWrapperProps) {
  useEffect(() => {
    useProperty.setState({
      propertyId,
      price,
      bookings,
    });
  }, []);

  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  );
}

export const DynamicBookingWrapper = dynamic(() => import("./BookingWrapper"), {
  ssr: false,
  loading: () => <Skeleton className="h-[200px] w-full" />,
});
