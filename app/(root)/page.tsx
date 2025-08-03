import Hero from "@/components/Hero";
import BestHotels from "@/components/best-hotels";
import Features from "@/components/Features";
import Video from "@/components/Video";
import TopDestination from "@/components/top-destination";
import Reviws from "@/components/Reviews";

import { getBestPriceHotelRoom } from "@/lib/actions/hotel.actions";


export const metadata = {
  title: 'Home',
};

export default async function Home() {
  const bestHotelRoomPrice = await getBestPriceHotelRoom();
  return (
    <>
    <Hero />
    <BestHotels data={bestHotelRoomPrice} />
    <Features />
    <Video />
    <TopDestination />
    <Reviws />
    </>
  );
}
