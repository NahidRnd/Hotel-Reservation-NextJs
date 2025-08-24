'use client';

import Book from "@/components/book/Book";
import RestoreBooking from "@/components/book/restore-booking";
import { useBook } from "@/context/BookContext";
import { useFilter } from "@/context/FilterContext";
import { Services } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; 

const HotelsFilter = ({services}: {services: Services[]}) => {
    const {price, setPrice, amenities, setAmenities} = useFilter();

    const { destination, date, options } = useBook();

    const handleService = ({id, name}: {id: string; name: string;}) => {
        setAmenities((prev)=>{
            return { 
                ...prev, 
                [id]: name
            }
        })
    }

    const router = useRouter();
    const searchParams = useSearchParams();
    
    const handleFilter = () => {
        // const encodedParams = new URLSearchParams({
        //   price: JSON.stringify(price),
        //   amenities: JSON.stringify(amenities),
        // });
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set("price", JSON.stringify(price));
        
        currentParams.set("amenities", JSON.stringify(amenities));

        currentParams.set("destination", destination);

        currentParams.set("date", JSON.stringify(date));
        currentParams.set("options", JSON.stringify(options));
        router.push(`/hotels?${currentParams.toString()}`);
    }

    
    
    return ( 
        <div className="space-y-6">
              <div className="">
                <h2>Booking Details</h2>
              </div>
              <RestoreBooking />
              <Book page="filter" />
              <div>
                <h3 className="text-lg font-semibold pb-5">price slider</h3>
                <div className="w-[95%] mx-auto">
                  <Slider range min={50} max={500} value={price.length>0 ? price : [50, 500]} onChange={(value) => {const fixedValue = Array.isArray(value) ? value : [value]; setPrice(fixedValue);}}  marks={{ 50: "€50", 150: "€150", 250: "€250", 400: "€400", 500: "€500", }} />
                </div>
              </div>
                <span className="pt-6">{price.length>0 ? `${price[0]} to ${price[1]}` : ""}</span>
              <div className="service-filter">
                <div className="">
                  <h3 className="text-lg font-semibold pt-8 pb-4">Included Services</h3>
                </div>
                <div className="max-h-56 overflow-y-auto">
                  {
                    services.map((item, index) => {
                      return <div className="mb-1" key={index}>
                        <input type="checkbox" className="mr-2" key={index} name={item.name} id={item.id} onChange={(e) => handleService({id:e.target.id,name:e.target.name})} /> 
                          {item.name}
                        </div>
                    })}
                </div>
              </div>
              <div className="btn" onClick={handleFilter}>
                Apply Filter
              </div>
            </div>
     );
}
 
export default HotelsFilter;