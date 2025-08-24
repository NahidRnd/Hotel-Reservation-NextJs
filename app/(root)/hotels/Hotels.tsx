'use client';

import Link from "next/link";
import Icon from '@mui/material/Icon';
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Image from "next/image";
import { HotelFull, Services } from "@/types";

const Hotels = ({hotels, serviceList}: {hotels: HotelFull[]; serviceList: Services[]}) => {

        const [openSort, setOpenSort] = useState(false);
        const sortRef = useRef(null);
        
        useOutsideClick({ref: sortRef, exceptionId: "sort", cb:() => setOpenSort(false)});
        
        

        /***************VIEW ***************/
        const [listView, setListView] = useState(true);

        const handleListView= () => {
          setListView(true)
        }

        const handleGridView = () => {
          setListView(false)
        }
        /***************VIEW ***************/

        /***************DRAG ***************/
        const journalRef = useRef<HTMLDivElement>(null);
        const Draggable = ({ className = "", children }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
            const ourRef = useRef<HTMLDivElement>(null);
            const [isMouseDown, setIsMouseDown] = useState(false);
            const mouseCoords = useRef({
                startX: 0,
                startY: 0,
                scrollLeft: 0,
                scrollTop: 0
            });
            // const [isScrolling, setIsScrolling] = useState(false);
            const handleDragStart = (e: React.MouseEvent) => {
                if (!ourRef.current) return
              // const slider = ourRef.current.children[0];
                const slider = ourRef.current;
                const startX = e.pageX - slider.offsetLeft;
                const startY = e.pageY - slider.offsetTop;
                const scrollLeft = slider.scrollLeft;
                const scrollTop = slider.scrollTop;
                mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
                setIsMouseDown(true)
                document.body.style.cursor = "grabbing"
              }
              const handleDragEnd = () => {
                setIsMouseDown(false)
                if (!ourRef.current) return
                document.body.style.cursor = "default"
              }
              const handleDrag = (e: React.MouseEvent) => {
                if (!isMouseDown || ! ourRef.current) return;
                e.preventDefault();
                const slider = ourRef.current;
                const x = e.pageX - slider.offsetLeft;
                const y = e.pageY - slider.offsetTop;
                const walkX = (x - mouseCoords.current.startX) * 1.5;
                const walkY = (y - mouseCoords.current.startY) * 1.5;
                slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
                slider.scrollTop = mouseCoords.current.scrollTop - walkY;
              }
              return (
                <div className={`drag ${className}`} ref={ourRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag} >
                {children}
              </div>
            );
          };
          /***************DRAG ***************/

        return (
              <div className="md:w-[70%] w-full">
                  <div className="flex justify-between items-center content-center mb-8 -mt-[10px]">
                    <span className="room-res">
                      <strong>{hotels.length}</strong> rooms found
                    </span>
                    <span className="ml-auto mr-8 md:flex hidden">
                      <span className="view-txt">View </span>         
                      <span className={`view-btn ${ listView ? "active" : ""}`}  onClick={handleListView}><Icon>format_list_bulleted</Icon></span>
                      <span className={`view-btn ${ !listView ? "active" : ""}`} onClick={handleGridView}><Icon>grid_on</Icon></span>
                    </span>
                    <span className="relative select-none">
                      <div className="relative border border-[#eaeaea] bg-white min-w-44 text-[#858a99] text-sm py-[2px] px-[10px] inline-block cursor-pointer rounded-sm leading-8" id="sort" onClick={()=> setOpenSort(!openSort)}>
                        Sort by: Default
                        <Icon className="absolute right-[10px] pl-1 top-[6px]">keyboard_arrow_down</Icon>
                      </div>
                      <ul className={`absolute z-10 bg-white min-w-44 p-0 m-0 rounded-0 border ${openSort ? "block" : "hidden"}`} ref={sortRef}>
                        <li className="m-0 py-[1px] cursor-pointer border-b mb-0 transition duration-300">
                          <a className="text-[#858a99] py-[7px] px-[10px] text-[13px] cursor-pointer" href="#">Sort by: Lowest Price</a>
                        </li>
                        <li className="m-0 py-[1px] cursor-pointer border-b mb-0 transition duration-300">
                        <a className="text-[#858a99] py-[7px] px-[10px] text-[13px] cursor-pointer" href="#">Sort by: Highest Price</a>
                        </li>
                        <li className="m-0 py-[1px] cursor-pointer border-b mb-0 transition duration-300">
                        <a className="text-[#858a99] py-[7px] px-[10px] text-[13px] cursor-pointer" href="#">Sort by: Default</a>
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div className="hidden md:block">
                    <div className={`rooms space-y-8 ${ !listView ? "grid-view" : ""}`}>
                    {
                  hotels.map( item  => {
                    return <div key={item.id} className={`${listView ? "flex border h-48" : "block h-[620px] border"}`}>
                        <div className={`${ listView ? "w-[35%] h-48" : "w-full h-64"}`}>
                          <Image src={item.coverImage} alt={item.name} width={400} height={400} className="h-full w-full object-cover" />
                        </div>
                        <div className={`${ listView ? "w-[45%] px-5 overflow-hidden py-3": "w-full text-center p-5 min-h-52"}`}>
                        <Link key={item.id} href={`/hotels/${item.id}`}>
                          <h2 className="text-ash text-[20px] leading-8">{item.name}</h2>
                        </Link>
                        <p className="line-clamp-3 my-[10px] leading-6">
                          {item.description}
                        </p>
                        <div className="z-10 mt-5 relative">
                        <Draggable className={"drag"}>
                        <div className="drag-scroll" ref={journalRef}>
                          {
                          item.amenities?.map((ser,i)=>
                            { 
                              const service = serviceList.find((el)=> {
                                return el.name === ser.name
                              })
                              if(!service) return <div key={i} className="flex items-center justify-center shrink-0 w-[35px] h-[35px] leading-9 border-dashed border-[#dedede] rounded-xs align-middle cursor-pointer">
                              <Icon>hotel</Icon>  
                            </div> 
                              return <div key={i} className="flex items-center justify-center shrink-0 w-[35px] h-[35px] leading-9 border border-dashed border-[#dedede] rounded-xs align-middle cursor-pointer">
                                <Icon>{service.icon}</Icon>  
                              </div> 
                            }
                          )}   
                          </div>
                        </Draggable>
                        </div>
                        </div>
                        <div className={`${listView ? "w-[20%]" : "w-full"} relative border-l border-l-[#ebebeb] text-center`}>
                          <div className={`${listView ? "pt-8" : "pt-1"}`}>
                            <div className="text-ash text-lg font-semibold">
                              € {Number(item.rooms[0].price)}
                              <span className="block text-[#858585] text-[12px] w-[80%] text-center m-auto pb-2">PER NIGHT</span>
                            </div>
                            {/* <button className="py-[10px] px-5 text-sm w-[80%] bg-primary text-white rounded-md">BOOK NOW</button> */}
                          </div>
                          <div className={`${listView ? "absolute bottom-0" : "relative -bottom-6"} border-t border-t-[#ededed] leading-8 w-full`}>
                            <Link href={`/hotels/${item.id}`}>
                              Rooms Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    })}
                    </div>
                  </div>
                  <div className="md:hidden block">
                    <div className="rooms space-y-8 grid-view">
                    {
                  hotels.map( item  => {
                    return <div key={item.id} className="block h-[620px] border">
                        <div className="w-full h-64">
                          <Image src={item.coverImage} alt={item.name} width={400} height={400} className="h-full w-full object-cover" />
                        </div>
                        <div className="w-full text-center p-5 min-h-52">
                        <Link key={item.id} href={`/hotels/${item.id}`}>
                          <h2 className="text-ash text-[20px] leading-8">{item.name}</h2>
                        </Link>
                        <p className="line-clamp-3 my-[10px] leading-6">
                          {item.description}
                        </p>
                        <div className="z-10 mt-5 relative">
                        <Draggable className={"drag"}>
                        <div className="drag-scroll" ref={journalRef}>
                          {
                          item.amenities?.map((ser,i)=>
                            { 
                              const service = serviceList.find((el)=> {
                                return el.name === ser.name
                              })
                              if(!service) return <div key={i} className="flex items-center justify-center shrink-0 w-[35px] h-[35px] leading-9 border-dashed border-[#dedede] rounded-xs align-middle cursor-pointer">
                              <Icon>hotel</Icon>  
                            </div> 
                              return <div key={i} className="flex items-center justify-center shrink-0 w-[35px] h-[35px] leading-9 border border-dashed border-[#dedede] rounded-xs align-middle cursor-pointer">
                                <Icon>{service.icon}</Icon>  
                              </div> 
                            }
                          )}   
                          </div>
                        </Draggable>
                        </div>
                        </div>
                        <div className="w-full relative border-l border-l-[#ebebeb] text-center">
                          <div className="pt-1">
                            <div className="text-ash text-lg font-semibold">
                              € {Number(item.rooms[0].price)}
                              <span className="block text-[#858585] text-[12px] w-[80%] text-center m-auto pb-2">PER NIGHT</span>
                            </div>
                            {/* <button className="py-[10px] px-5 text-sm w-[80%] bg-primary text-white rounded-md">BOOK NOW</button> */}
                          </div>
                          <div className="relative -bottom-6 border-t border-t-[#ededed] leading-8 w-full">
                            <Link href={`/hotels/${item.id}`}>
                              Rooms Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    })}
                    </div>
                  </div>
                </div>
      );
}
 
export default Hotels;