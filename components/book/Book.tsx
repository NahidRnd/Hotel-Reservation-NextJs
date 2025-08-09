"use client";

import { OptionsSelect, useBook } from "@/context/BookContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import useOutsideClick from "@/hooks/useOutsideClick";


const Book = ({page}:{page?: string}) => {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const { destination, setDestination, date, setDate, options, setOptions, isReady }= useBook();
    console.log('date context: ', date);

    useEffect(() => {
        if(isReady){
            localStorage.setItem("date", JSON.stringify(date));
            localStorage.setItem("options", JSON.stringify(options));
            localStorage.setItem("destination", destination);
        }
    }, [date, options, destination, isReady]);

    const handleOptions = ({name, operation} : {name: keyof typeof options, operation: "inc" | "dec";}) => {
        setOptions((prev: OptionsSelect) => {
            return {
                ...prev,
                [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const router = useRouter();
    const searchParams = useSearchParams();
    console.log(searchParams);
    
    const handleSearch = () => {
        const encodedParams = new URLSearchParams({
            date: JSON.stringify(date),
            destination,
            options: JSON.stringify(options),            
        });  
        router.push(`/hotels?${encodedParams.toString()}`);
    };

    // page === 'filter' ? handleSearch : ""

    const dateRef = useRef<HTMLDivElement>(null);
    useOutsideClick({ref: dateRef, exceptionId: "checkin", cb: () => setOpenDate(false)});
    
    if (!isHomePage &&!isReady) { return <div>Loading Reserve ...</div>; }

    return ( 
        <div className={`${isHomePage ? "flex p-[30px]" : "inline-block p-4 w-full border *:w-full **:w-full"} ${page === 'filter' ? "border-0 p-0!" : ""} justify-center gap-[10px] rounded-sm bg-white`}>
            <div className="single-book">
                {`${!isHomePage ? "Book Your Hotel" : ""}`}
            </div>
            <label htmlFor="destination" className={`${isHomePage ? "" : "text-[#6d7991] font-semibold pt-5 block"}`}>{`${!isHomePage ? "Destination" : ""}`}</label>
            <div className="book-input">
                <input type="text" value={destination} onChange={(e)=> setDestination(e.target.value)} placeholder="Where to go?" name="destination" id="destination" />
            </div>
            <label htmlFor="checkin" className={`${isHomePage ? "" : "text-[#6d7991] font-semibold pt-5 block"}`}>{`${!isHomePage ? "Check In/Out" : ""}`}</label>
            <div className="book-input">
                <input onClick={()=>setOpenDate(!openDate)} type="text" placeholder={`${date[0]?.startDate ? format(date[0].startDate,"dd/MM/yyyy") : "Start Date"} to ${date[0]?.endDate ? format(date[0].endDate,"dd/MM/yyyy") : "End Date"}`} name="checkin" id="checkin" className="relative placeholder:text-[#858585]" />
                {openDate && <div ref={dateRef}><DateRange onChange={(item) => setDate([item.selection])} ranges={date} className="absolute p-[10px] border-[#efefef] rounded-xs left-[37.6%] right-auto block" minDate={new Date()} moveRangeOnFirstSelection={true} /></div>}
            </div>
            <label htmlFor="guests" className={`${isHomePage ? "" : "text-[#6d7991] font-semibold pt-5 block"}`}>{`${!isHomePage ? "Guests" : ""}`}</label>
            <div className="book-input">
                <input type="text" placeholder={`${options.Adult} Adult, ${options.children} children, ${options.room} room`} name="guests" id="guests" className="relative placeholder:text-[#858585]" onClick={()=> setOpenOptions(!openOptions)} />
                
                {openOptions && <GustOptionList setOpenOptions={setOpenOptions} options={options} handleOptions={handleOptions} />}
            </div>
            <button className={`btn ${isHomePage ? "" : "mt-6"} ${page === 'filter' ? "hidden" : ""}`} onClick={handleSearch}>
            Check Availability
            </button>
            
        </div>
     );
}
 
export default Book;

function GustOptionList({options, handleOptions, setOpenOptions}: {options: OptionsSelect; handleOptions: (args: { name: keyof OptionsSelect; operation: "inc" | "dec" }) => void; setOpenOptions: React.Dispatch<React.SetStateAction<boolean>>;}){
    const optionRef = useRef<HTMLDivElement>(null);
    useOutsideClick({ref: optionRef, exceptionId: "guests", cb: () => setOpenOptions(false)});
    return <div className="absolute min-w-[188px] mt-[1px] p-[15px] bg-white border-[#efefef] text-[#858a99] rounded-xs z-10 shadow-gray"  ref={optionRef}>
        <OptionItem handleOptions={handleOptions} type="Adult" options={options} minLimit={1} />
        <OptionItem handleOptions={handleOptions} type="children" options={options} minLimit={0} />
        <OptionItem handleOptions={handleOptions} type="room" options={options} minLimit={1} />
    </div>
}

function OptionItem({options, type, minLimit, handleOptions}: {options: OptionsSelect; type: keyof OptionsSelect; minLimit: number; handleOptions: (args: { name: keyof OptionsSelect; operation: "inc" | "dec" })=> void;}){
    return <div className="flex items-center justify-center mb-5">
    <span className="option-text">{String(type)}</span>
    <div className="ml-auto">
        <button onClick={() => handleOptions({name: type, operation: "dec"})} className="w-8 h-8 text-[10px] bg-[#fafafa] border border-[#d4d9e1] inline-block text-center cursor-pointer leading-8" disabled={options[type] <= minLimit}>-</button>
        <span className="w-8 text-[15px] text-center p-0 m-0 border-0 outline-none shadow-none pointer-events-none inline-block">{options[type]}</span>
        <button onClick={() => handleOptions({name: type, operation: "inc"})} className="w-8 h-8 text-[10px] bg-[#fafafa] border border-[#d4d9e1] inline-block text-center cursor-pointer leading-8">+</button>
    </div>
</div>
}