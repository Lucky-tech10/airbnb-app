"use client";
import { useProperty } from "@/utils/store";
import { useEffect, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from "@/utils/calendar";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => state.bookings);
  const blockedPeriod = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });
  const { toast } = useToast();
  const unavailableDates = generateDisabledDates(blockedPeriod);

  useEffect(() => {
    const selesctedRange = generateDateRange(range);
    selesctedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: "some dates are booked. Please select again.",
        });
        return true;
      }
      return false;
    });
    useProperty.setState({ range });
  }, [range]);

  return (
    <DayPicker
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      disabled={blockedPeriod}
      className="mb-4"
      classNames={{
        day_selected: "bg-primary !important", // Change selected day color
        day_today: "text-primary !important", // Optional: highlight today
      }}
    />
  );
};

export default BookingCalendar;
