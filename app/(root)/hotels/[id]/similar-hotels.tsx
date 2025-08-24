import { getSimilarHotels } from "@/lib/actions/hotel.actions";
import Image from "next/image";
import Link from "next/link";

const SimilarHotels = async ({id, city}: {id: string; city: string;}) => {
    const data = await getSimilarHotels(id, city);
    console.log('similar : ---------------------------',data[0].rooms);
    
    return ( 
        <div className="container pt-5!">
            <h3 className="text-ash text-xl font-semibold pb-5">Similar Hotels</h3>
            <div className="">
                {/* bg-[linear-gradient(180deg,_#F5F3F0_0%,_#F5F3F0_100%)]  */}
                  <div className="flex flex-col md:flex-row gap-8 w-full">
                  {data.map((item) => {
                    return (
                      <div className="group relative rounded-sm overflow-hidden" key={item.id}>
                        <Link key={item.id} href={`/hotels/${item.id}`}>
                          <Image src={`${item.coverImage}`} alt={item.name} width={400} height={400} className="w-full h-[400px] rounded-[4px] transition-transform duration-[1000ms] ease-[cubic-bezier(0,1,.5,1)] hover:scale-[1.1]" />
                        </Link>
                        <p className="absolute top-[10px] right-[10px] bg-[rgba(0,0,0,0.2)] text-white px-[10px] py-[2px] rounded-[2px] leading-[24px] text-[14px] transition-colors duration-300 group-hover:bg-[rgba(0,0,0,0.3)]">
                          € {item.rooms[0].price.toString()} /
                          <span> night</span>
                        </p>
                        <div className="absolute bottom-0 left-0 w-full h-[80px] z-[9] text-white text-[14px] bg-gradient-to-t from-[hsla(0,0%,0%,0.6)] to-[rgba(0,0,0,0)] rounded-bl-[4px] rounded-br-[4px]">
                          <div className="absolute z-[9] text-left px-[20px] bottom-[-20px] transition-all duration-300 group-hover:bottom-[15px]">
                            <Link key={item.id} href={`/hotels/${item.id}`}>
                              <h4 className="text-[18px] mb-[10px]">{item.city.name}</h4>
                            </Link>
                            <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">{item.name}</p>
                          </div> 
                        </div>
                    </div>
                    );
                  })}
                  </div>
                </div>
        </div>
     );
}
 
export default SimilarHotels;