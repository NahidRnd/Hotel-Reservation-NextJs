'use client';

import { useEffect } from "react";
import { useBook } from "@/context/BookContext";
import { DateRange } from "@/types";

const RestoreBooking = () => {
  const { setDate, setOptions, setDestination, setIsReady } = useBook();

//   useEffect(() => {
//     const storedDate = localStorage.getItem("date");
//     const storedOptions = localStorage.getItem("options");
//     const storedDestination = localStorage.getItem("destination");

//     if (storedDate) setDate(JSON.parse(storedDate));
//     if (storedOptions) setOptions(JSON.parse(storedOptions));
//     if (storedDestination) setDestination(storedDestination);
//     setIsReady(true);
//   }, []);

    useEffect(() => {
    const storedDate = localStorage.getItem("date");
    const storedOptions = localStorage.getItem("options");
    const storedDestination = localStorage.getItem("destination");

    if (storedDate) {
        const parsedDate = JSON.parse(storedDate);
        const restoredDate = parsedDate.map((range: DateRange) => ({
        ...range,
        startDate: new Date(range.startDate),
        endDate: new Date(range.endDate)
        }));
        setDate(restoredDate);
    }

    if (storedOptions) setOptions(JSON.parse(storedOptions));
    if (storedDestination) setDestination(storedDestination);
    setIsReady(true);
    }, [setDate, setDestination, setIsReady, setOptions]);

  return null;
};

export default RestoreBooking;
