import CheckoutSteps from "@/components/checkout-steps";
import { getMyBook } from "@/lib/actions/book.actions";
import Link from "next/link";
import { format } from "date-fns";
import { IoCheckmark } from "react-icons/io5";

const Confirmation = async() => {
    const bookInfo = await getMyBook();
    const startDate = bookInfo?.startDate ? bookInfo.startDate : "N/A";
    const endDate = bookInfo?.endDate ? bookInfo.endDate : "N/A";
    const nights = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    const totalPrice = (Number(bookInfo?.room.price) ?? 0) * nights;

    return ( 
        <div className="pt-[100px]">
            <div className="bg-cream text-ash">
              <div className="container flex justify-between items-center">
                <div className="">
                  <h2>Booking</h2>
                  <ul className="flex">
                    <li>
                      <Link className="breadcrumb" href="/">Home</Link>
                    </li>
                    <li>
                      Booking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <CheckoutSteps current={3} />
            <div className="flex md:w-xl bg-green-200 text-green-950 md:m-auto mx-2 rounded p-6 mb-6 items-center gap-2">
                <IoCheckmark className="bg-green-300 rounded-full w-14 h-10" />
                <p>Your booking has been submitted successfully. We will call you when it is confirmed by hotel administration.</p>
            </div>
            <div className="md:m-auto mx-2 md:w-xl border rounded-sm md:p-10 p-4 mb-10">
                <h2 className="text-ash text-[20px] leading-8 mb-6 text-center">Booking Details</h2>
                <div className="grid grid-cols-2 gap-y-2">
                    <p>Booking ID</p>
                    <strong>{bookInfo?.id.split('-')[0]}</strong>
                    <p>Full Name</p>
                    <strong>{bookInfo?.user.name}</strong>
                    <p>Email</p>
                    <strong>{bookInfo?.user.email}</strong>
                    <p>Phone</p>
                    <strong>{bookInfo?.user.phone}</strong>
                    <p>Hotel</p>
                    <strong>{bookInfo?.room.hotel.name}</strong>
                    <p>Room</p>
                    <strong>{bookInfo?.room.name}</strong>
                    <p>Check In/Out</p>
                    <strong>{startDate !== "N/A" ? format(startDate,"dd/MM/yyyy") : ""} → {endDate !== "N/A" ? format(endDate,"dd/MM/yyyy") : ""}</strong>
                    <p>Guests</p>
                    <strong>{bookInfo?.guests}</strong>
                    <p>Total Price</p>
                    <strong>{totalPrice}</strong>
                </div>
            </div>
        </div>
     );
}
 
export default Confirmation;