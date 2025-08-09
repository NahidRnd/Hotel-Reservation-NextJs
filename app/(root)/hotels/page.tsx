import { OptionsSelect } from "@/context/BookContext";
import { getAllServices, getHotels } from "@/lib/actions/hotel.actions";
import Link from "next/link";
import { Range } from "react-date-range";
import Hotels from "./Hotels";
import HotelsFilter from "./HotelsFilter";

const HotelsPage = async (props: {searchParams:Promise<{destination: string, date: Range, options: OptionsSelect, price: string, amenities: string[]}>}) => {
    const {destination, date, options, price="0,500", amenities} = await props.searchParams;
    const startDate = date.startDate ? new Date(date.startDate) : new Date();
    const endDate = date.endDate ? new Date(date.endDate) : new Date();
    const parsedOptions = (typeof options === "string") ? JSON.parse(options) : options;
    const totalGuests = parsedOptions.Adult + parsedOptions.children;
    const hotels = await getHotels({destination, capacity: totalGuests, priceRange: price, amenities, startDate, endDate});
    const serviceList = await getAllServices();
    // console.log("query :",destination);
    // console.log("date :",date);
    // console.log("options :",options);
    // console.log("hotels:  ",hotels);
    // console.log("adults:  ", adults);
    // console.log("totalGuests:  ", totalGuests);   
    
    return ( 
            <div className="pt-24">
              <div className="py-12 bg-[#f5f3f0] text-ash">
                <div className="container flex items-center justify-center">
                  <div className="hotel-search__title">
                    <h2>Hotel Search</h2>
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        Search
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="container flex pt-24 gap-8">
                <div className="w-[25%]">
                 <HotelsFilter services={serviceList} />
                </div>
                <Hotels hotels={hotels} serviceList={serviceList} />
              </div>
            </div>
     );
}
 
export default HotelsPage;