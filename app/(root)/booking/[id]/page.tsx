import CheckoutSteps from "@/components/checkout-steps";
import { useBook } from "@/context/BookContext";
import { getMyBook } from "@/lib/actions/book.actions";
import { getRoomById } from "@/lib/actions/hotel.actions";
import Link from "next/link";
import BookingDetails from "./booking-details";
import { getUserInfo } from "@/lib/actions/user.actions";
import BookingUserInfo from "./booking-user-info";

const BookingPage = async (props: {params: Promise<{id: string}>;}) => {

    const {id:roomId} = await props.params;
    const room = await getRoomById(roomId);
    const booking = await getMyBook();
    const user = await getUserInfo();
    
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
            <CheckoutSteps current={1} />
            <div className="container flex pt-[100px] gap-[30px]">
                <div className="w-[70%]">
                  <div className={`rooms space-y-8`}>
                   <div className="flex border h-48">
                      <div className="w-[35%] h-48">
                        <img src={room?.images[0]} alt={room?.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="w-[45%] px-5 overflow-hidden py-3">
                        <Link href={`/hotels/`}>
                          <h2 className="text-ash text-[20px] leading-8 mb-2">{room?.hotel.name}</h2>
                        </Link>
                        <p>
                          <strong>City:</strong> {room?.hotel.city.name}
                        </p>
                        <p>
                          <strong>Room:</strong> {room?.name}
                        </p>
                        <p>
                          <strong>Room Type:</strong> {room?.type}
                        </p>
                        <p>
                          {/* <strong>Guests:</strong> {options.Adult} Adults, {options.children} Children */}
                        </p>
                        <div className="z-10 mt-5 relative">
                        </div>
                      </div>
                    </div>
                  </div>
                  <BookingUserInfo user={user} />
                </div>
                <div className="w-[30%] border font-semibold p-6">
                  <BookingDetails price={Number(room?.price)} roomId={roomId} />
                </div>
            </div>
          </div>
     );
}
 
export default BookingPage;