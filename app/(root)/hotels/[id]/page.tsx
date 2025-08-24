

import { getAllServices, getBestPriceHotelRoomById, getHotelRoomsById } from "@/lib/actions/hotel.actions";
import Image from "next/image";
import Rooms from "./Rooms";
import Link from "next/link";
import { Icon } from "@mui/material";
import { Star } from "@mui/icons-material";
import SimilarHotels from "./similar-hotels";
import Book from "@/components/book/Book";
import RestoreBooking from "@/components/book/restore-booking";


const HotelRoomsPage = async (props: {params: Promise<{id: string}>;}) => {
    const {id} = await props.params;
    const data = await getHotelRoomsById(id);
    const serviceList = await getAllServices();
    const bestPrice = await getBestPriceHotelRoomById(id);
    
    return ( 
      <div className="pt-24">
            <div className="bg-cream text-ash">
              <div className="container flex justify-between items-center">
                <div className="">
                  <h2>{data?.name}</h2>
                  <ul className="flex">
                    <li>
                      <Link className="breadcrumb" href="/">Home</Link>
                    </li>
                    <li>
                      <Link className="breadcrumb" href="/hotels">Hotels</Link>
                    </li>
                    <li>
                      {data?.name}
                    </li>
                  </ul>
                </div>
                <div className="text-[22px] font-semibold text-right">€ {Number(bestPrice?.rooms[0].price)}<span className="block text-[14px] font-normal">per night</span></div>
              </div>
            </div>
            <div className="container flex flex-col md:flex-row pt-[100px] gap-[30px]">
                <div className="md:w-[70%] w-full">
                  <div className="">
                    <div className="">
                      <Image className="w-full" src='/1.jpg' alt="hotel image" width={400} height={400} />              
                    </div>
                    <div className="flex w-[24%] gap-[5.5%] pt-[15px]">
                      <Image src='/5.jpg' width={400} height={400} alt="hotel image" />
                      <Image src='/2.jpg' width={400} height={400} alt="hotel image" />
                      <Image src='/3.jpg' width={400} height={400} alt="hotel image" />
                      <Image src='/4.jpg' width={400} height={400} alt="hotel image" />
                    </div>
                  </div>
                  <div className="pt-[25px]">
                    {data?.description}
                  </div>
                  <h3 className="text-ash text-xl font-semibold pt-12 pb-5">Hotel Facilities</h3>
                  <div className="grid md:grid-cols-4 grid-cols-2">
                    {/* grid-template-columns: repeat(4, 1fr); */}
                  {
                    data?.amenities.map((item, index) => {
                        const service = serviceList.find((el)=> {
                          return el.name === item.name
                        })
                        if(!service) return <div key={index} className="flex justify-center items-center w-[35px] h-[35px]">
                        <Icon>hotel</Icon>  
                      </div>      
                      return (
                        <div key={index} className="flex gap-[10px] items-center">
                          <span className="text-primary w-[20px] pt-[10px]">
                            <Icon>{service.icon}</Icon>  
                          </span>
                          <span className="service-text">
                            {item.name}  
                          </span>
                          </div>
                      );
                  })} 
                  </div>
                </div>
                <div className="single-hotel__sidebar w-full md:w-[25%]">
                  <RestoreBooking />
                  <Book />
                  <div className="inline-block rounded-sm border w-full mt-[50px]">
                    <div className="flex border-b p-[15px]">
                      <span className="text-ash text-[18px] font-bold pr-[10px]">8.6</span>
                      <Star className="w-[22px] text-[#fcbf02]" />
                      <Star className="w-[22px] text-[#fcbf02]" />
                      <Star className="w-[22px] text-[#fcbf02]" />
                      <Star className="w-[22px] text-[#fcbf02]" />
                      <Star className="w-[22px] text-[#fcbf02]" />
                      <span className="pl-[5px] text-sm">(2,400 reviews)</span>
                    </div>
                    <div className="p-[15px]">
                      <div className="flex gap-[10px] items-center py-[10px] leading-5">
                        <Image className="w-10 rounded-[20px]" src='/user1-1.jpg' alt="review" width={400} height={400} />
                        <span className="text-ash font-semibold">
                        Aybars furkan
                        <p className="text-[#858a99] text-[12px]">jun 24</p>
                        </span>
                      </div>
                      <div className="review-comment">
                      Otelin Temizliği gayet iyiydi. personel güler yüzlüydü herşey için teşekkür ederiz
                      </div>
                    </div>
                    <div className="p-[15px]">
                      <div className="flex gap-[10px] items-center py-[10px] leading-5">
                        <Image className="w-10 rounded-[20px]" src='/user2.jpg' alt="review" width={400} height={400} />
                        <span className="text-ash font-semibold">
                        Ersen Emir
                        <p className="text-[#858a99] text-[12px]">jul 2022</p>
                        </span>
                      </div>
                      <div className="review-comment">
                      İlgili güleryüzlü resepsiyonla başlayan konaklama üzerine tanımam. Teşekkurler
                      </div>
                    </div>
                    <div className="p-[15px]">
                      <div className="flex gap-[10px] items-center py-[10px] leading-5">
                        <Image className="w-10 rounded-[20px]" src='/user8.jpg' alt="review" width={400} height={400} />
                        <span className="text-ash font-semibold">
                        Abdülbaki
                        <p className="text-[#858a99] text-[12px]">feb 2024</p>
                        </span>
                      </div>
                      <div className="review-comment">
                      Güleryüzlü personel, isteklerin ananda karşılanması.
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            {data && <Rooms data={data} serviceList={serviceList} />}
            <SimilarHotels id={data?.id || ""} city={data?.city?.name || ""} />
      </div>
     );
}
 
export default HotelRoomsPage;