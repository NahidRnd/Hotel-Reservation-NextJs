import { HotelCity } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BestHotels = ({data}: {data: HotelCity[]}) => {
    return ( 
        <>
        {data.length > 0 ? (
            <div className="container bg-gradient-to-b from-[#F5F3F0] to-[#F5F3F1] py-[70px]">
                <h2 className="title pb-8">Our Best Hotels</h2>
                <div className="flex gap-8 w-full">
                  {data.map((item: HotelCity) => {
                    return (
                      <div className="group relative rounded-sm overflow-hidden" key={item.id}>
                        <Link key={item.id} href={`hotels/${item.id}`}>
                          <Image src={item.coverImage} alt={item.name} width={200} height={200} className="rounded w-full h-[400px] transition-transform duration-1000 ease-[cubic-bezier(0,1,.5,1)] hover:scale-110" />
                        </Link>                     
                        <p className="absolute top-3 right-3 bg-black/20 text-white py-[2px] px-[10px] rounded-xs leading-6 text-sm transition duration-300">
                          € {Number(item.rooms[0].price)} / 
                          <span> night</span>
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-20 text-white text-sm z-10 bg-gradient-to-t from-black/60 to-transparent rounded-b-[4px]">
                          <div className="absolute bottom-[-20px] z-10 text-left pl-5 transition-all duration-300 group-hover:bottom-[15px]">
                            <Link key={item.id} href={`hotels/${item.id}`}>
                              <h4 className="text-lg mb-[10px]">{item.city.name}</h4>
                            </Link>
                            <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.name}</p>
                          </div>  
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
            ) : (
            <div>
                <p>No Hotels Found</p>
            </div>
        )}
        </>
    );
}
 
export default BestHotels;