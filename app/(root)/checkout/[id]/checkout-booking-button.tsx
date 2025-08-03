'use client';
import { LiaPaypal } from "react-icons/lia";
import { RiBankFill } from "react-icons/ri";
import { FaMoneyBillAlt, FaRegCalendarAlt } from "react-icons/fa";
import { Room, User } from "@/types";
import { addItemToBook } from "@/lib/actions/book.actions";
import { useBook } from "@/context/BookContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CheckoutBookingButton = ({room}: {room: Room}) => {
    const { date, options } = useBook();
    const startDate = date?.[0]?.startDate ? date[0].startDate : "N/A";
    const endDate = date?.[0]?.endDate ? date[0].endDate : "N/A";
    const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = room.price * nights;
    
    const router = useRouter();

    const handleBook = async () => {
        const data = {
            roomId: room.id,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            guests: options.Adult + options.children,
            status: 'Pending',
        }
        
        const booking = await addItemToBook(data);

        toast(booking.message)

        if(booking.success) {
            router.push('/confirmation');
        }
        
    }
    return ( 
        <div className="border font-semibold p-6">
                    <h2 className="text-ash text-[20px] leading-8 mb-4">Payment Details</h2>
                    <ul className="flex gap-6">
                        <li className="w-40 h-44 border rounded-md py-5 text-center font-bold cursor-pointer">
                            <label htmlFor="paypal" className="block cursor-pointer">
                                <input type="radio" name="payment" id="paypal" className="peer hidden" />
                                <div className="w-20 h-20 p-4 rounded-full m-auto bg-gray-100 mb-4 peer-checked:bg-primary peer-checked:text-white">
                                    <LiaPaypal size={44} className="m-auto pt-1" />
                                </div>
                                PayPal
                            </label>
                        </li>
                        <li className="w-40 h-44 border rounded-md py-5 text-center font-bold cursor-pointer">
                            <label htmlFor="bank" className="block cursor-pointer">
                                <input type="radio" name="payment" id="bank" className="peer hidden" />
                                <div className="w-20 h-20 p-4 rounded-full m-auto bg-gray-100 mb-4 peer-checked:bg-primary peer-checked:text-white">
                                    <RiBankFill size={44} className="m-auto pt-1" />
                                </div>
                                Bank Transfer
                            </label>
                        </li>
                        <li className="w-40 h-44 border rounded-md py-5 text-center font-bold cursor-pointer">
                            <label htmlFor="arrival" className="block cursor-pointer">
                                <input type="radio" name="payment" id="arrival" className="peer hidden" />
                                <div className="w-20 h-20 p-4 rounded-full m-auto bg-gray-100 mb-4 peer-checked:bg-primary peer-checked:text-white">
                                    <FaMoneyBillAlt size={44} className="m-auto pt-1" />
                                </div>
                                Payment On Arrival
                            </label>
                        </li>
                        <li className="w-40 h-44 border rounded-md py-5 text-center font-bold cursor-pointer">
                            <label htmlFor="request" className="block cursor-pointer">
                                <input type="radio" name="payment" id="request" className="peer hidden" />
                            <div className="w-20 h-20 p-4 rounded-full m-auto bg-gray-100 mb-4 peer-checked:bg-primary peer-checked:text-white">
                                <FaRegCalendarAlt size={44} className="m-auto pt-1" />
                            </div>
                            Booking Request
                            </label>
                        </li>
                    </ul>
                    <button onClick={handleBook} className="bg-primary text-white px-6 py-2 mt-8 rounded-sm">Book Now</button>
                </div>
     );
}
 
export default CheckoutBookingButton;