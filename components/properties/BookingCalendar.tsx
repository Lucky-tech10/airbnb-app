"use client";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const BookingCalendar = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  return (
    <DayPicker
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className=""
    />
  );
};

export default BookingCalendar;
