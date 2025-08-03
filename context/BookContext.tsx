'use client';

import { createContext, useContext, useEffect, useState } from "react";
import type { Range } from "react-date-range";

type DateSelection = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type OptionsSelect = {
    Adult: number;
    children: number;
    room: number;
}

type BookContextType = {
    destination: string;
    setDestination: (val: string) => void;
    // date: Range[] | null;
    // setDate: React.Dispatch<React.SetStateAction<Range[] | null>>;
    date: Range[];
    setDate: React.Dispatch<React.SetStateAction<Range[]>>;
    options: OptionsSelect;
    setOptions: React.Dispatch<React.SetStateAction<OptionsSelect>>;
    isReady: boolean;
    setIsReady: (val: boolean) => void;
}


export const BookContext = createContext<BookContextType | null>(null);

export function BookProvider({ children }: { children: React.ReactNode }) {
    const [isReady, setIsReady] = useState(false);
    const [destination, setDestination] = useState("");
    const [options, setOptions] = useState<OptionsSelect>({Adult:1, children:0, room:1,});
    // const [date, setDate] = useState<Range[] | null>(null)
    const [date, setDate] = useState<Range[]>([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        }
    ])

    useEffect(() => {
  const storedDate = localStorage.getItem("date");
  const storedOptions = localStorage.getItem("options");
  const storedDestination = localStorage.getItem("destination");

  if (storedDate) {
    try {
      const parsed = JSON.parse(storedDate);
      const converted = parsed.map((range: any) => ({
        ...range,
        startDate: new Date(range.startDate),
        endDate: new Date(range.endDate),
      }));
      setDate(converted);
    } catch (error) {
      console.error("Invalid date format in localStorage", error);
    }
  }

  if (storedOptions) setOptions(JSON.parse(storedOptions));
  if (storedDestination) setDestination(storedDestination);

  setIsReady(true);
}, []);

    return (
        <BookContext.Provider value={{destination, setDestination, date, setDate, options, setOptions, isReady, setIsReady}}> 
        {children}
        </BookContext.Provider>
    );
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within BookProvider");
  return context;
};

