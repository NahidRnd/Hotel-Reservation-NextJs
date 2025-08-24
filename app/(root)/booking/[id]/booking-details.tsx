'use client';
import { useBook } from "@/context/BookContext";
import { format } from "date-fns";
import Link from "next/link";

const BookingDetails = ({price, roomId}: { price: number; roomId: string; }) => {
        const { date } = useBook();
        const startDate = date?.[0]?.startDate ? date[0].startDate : "N/A";
        const endDate = date?.[0]?.endDate ? date[0].endDate : "N/A";
        const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));

        const totalPrice = price * nights;
      
        return (
        <div className="flex flex-col md:h-full h-50">
          <h3 className="text-lg font-bold text-ash my-2">Booking Details</h3>
          <div className="flex justify-between">
            <span>Check In</span>
            <span>{startDate !== "N/A" ? format(startDate,"dd/MM/yyyy") : ""}</span>
          </div>
          <div className="flex justify-between">
            <span>Check Out</span>
            <span>{endDate !== "N/A" ? format(endDate,"dd/MM/yyyy") : ""}</span>
          </div>
          <div className="flex justify-between">
            <span>Nights</span>
            <span>{nights}</span>
          </div>
          <div className="flex justify-between">
            <span>Room Price</span>
            <span>€ {price}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Price</span>
            <span>€ {totalPrice}</span>
          </div>
          <Link href={`/checkout/${roomId}`} className="bg-primary text-white rounded-sm p-2 mt-auto text-center">Continue to CheckOut</Link>
        </div>
    );
}
 
export default BookingDetails;