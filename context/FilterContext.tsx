'use client';

import { createContext, useContext, useState } from "react";


type FilterContextType = {
    price: number[];
    setPrice: React.Dispatch<React.SetStateAction<number[]>>;
    amenities: string[];
    setAmenities: React.Dispatch<React.SetStateAction<string[]>>;
}


export const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [price, setPrice] = useState<number[]>([]);
    const [amenities, setAmenities] = useState<string[]>([]);

    return (
        <FilterContext.Provider value={{price, setPrice, amenities, setAmenities}}> 
        {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used within FilterProvider");
  return context;
};

