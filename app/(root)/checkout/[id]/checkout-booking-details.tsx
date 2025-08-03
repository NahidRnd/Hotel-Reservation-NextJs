"use client";

import { useBook } from "@/context/BookContext";
import { Room, User } from "@/types";
import Link from "next/link";
import { format } from "date-fns";

const CheckoutBookingDetails = ({room, user}: {room: Room, user: User}) => {
    const { date, options } = useBook();
    const startDate = date?.[0]?.startDate ? date[0].startDate : "N/A";
    const endDate = date?.[0]?.endDate ? date[0].endDate : "N/A";
    const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));

    const totalPrice = room.price * nights;
    return ( 
        <div className="border rounded-sm p-5">
            <h2 className="text-ash text-[20px] leading-8 mb-4">Booking Details</h2>
            <div className="grid grid-cols-3 gap-y-2">
                <p>
                    <strong>Full Name:</strong> {user.name}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                    <strong>Hotel:</strong> {room?.hotel.name}
                </p>
                <p>
                    <strong>City:</strong> {room?.hotel.city.name}
                </p>
                <p>
                    <strong>Room:</strong> {room?.name}
                </p>
                {/* <p>
                    <strong>Room Type:</strong> {room?.type}
                </p> */}
                <p>
                    <strong>Check In/Out:</strong> {startDate !== "N/A" ? format(startDate,"dd/MM/yyyy") : ""} → {endDate !== "N/A" ? format(endDate,"dd/MM/yyyy") : ""}
                </p>
                <p>
                    <strong>Guests:</strong> {options.Adult} Adults, {options.children} Children
                </p>
                <p>
                    <strong>Total Price:</strong> € {totalPrice}
                </p>
            </div>
        </div>
     );
}
 
export default CheckoutBookingDetails;