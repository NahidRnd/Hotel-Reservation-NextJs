
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { BedOutlined, Coffee } from "@mui/icons-material";
import Image from "next/image";
import { HotelRoom, Services } from "@/types";

const Rooms = ({data, serviceList}: {data: HotelRoom; serviceList: Services[]}) => {
        console.log(serviceList);
        
    return (
        <div className="container pt-[100px] space-y-8">
          {
          data?.rooms.map( item => {
            return <div key={item.id} className="flex flex-col md:flex-row border md:h-[250px]">
                <div className="md:w-[35%] w-full">
                  <Image src={item.images[0]} alt={item.name} className="h-[250px] w-full object-cover" width={400} height={400} />
                </div>
                <div className="md:w-[45%] w-full pt-5 pl-5 overflow-hidden py-3">
                  <h2 className="text-ash text-[20px] leading-8 ">{item.name}</h2>
                  <div className="z-10 mt-5 relative flex items-center gap-2">
                    <FaUser />
                    <span>{item.capacity} Guests</span>
                    <span></span>
                    <BedOutlined />
                    <span>{item.type}</span>
                    <span></span>
                    <Coffee />
                    <span>Breakfast</span>
                    <span></span>
                  </div>
                </div>
                <div className="md:w-[20%] w-full md:relative border-l border-l-[#ebebeb] text-center">
                  <div className="md:pt-12 px-5 md:py-0 py-3 space-y-4 flex justify-between items-center md:block">
                    <div className="text-ash md:text-lg font-semibold">
                      € {Number(item.price)}
                      <span className="block text-[#858585] text-sm text-center">PER NIGHT</span>
                    </div>
                    {/* <button className="py-[10px] px-5 text-sm w-[80%] bg-primary text-white">BOOK NOW</button> */}
                    <Link href={`/booking/${item.id}`} className="py-[10px] px-5 md:mt-4 text-sm md:w-[80%] bg-primary text-white rounded-md">BOOK NOW</Link>
                  </div>
                  <div className="md:absolute border-t border-t-[#ededed] bottom-0 leading-8 w-full py-2">
                    <Link href={`/booking/${item.id}`}>
                      Check Availibility
                    </Link>
                  </div>
                </div>
              </div>
            })}
        </div>
      );
}
 
export default Rooms;