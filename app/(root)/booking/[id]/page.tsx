import CheckoutSteps from "@/components/checkout-steps";
// import { getMyBook } from "@/lib/actions/book.actions";
import { getRoomById } from "@/lib/actions/hotel.actions";
import Link from "next/link";
import BookingDetails from "./booking-details";
import { getUserInfo } from "@/lib/actions/user.actions";
import BookingUserInfo from "./booking-user-info";
import Image from "next/image";

const BookingPage = async (props: {params: Promise<{id: string}>;}) => {

    const {id:roomId} = await props.params;
    const room = await getRoomById(roomId);
    // const booking = await getMyBook();
    const user = await getUserInfo();
    
    return ( 
          <div className="pt-24">
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
            <div className="container flex flex-col md:flex-row pt-[100px] gap-[30px]">
                <div className="md:w-[70%] w-full">
                  <div className={`rooms space-y-8`}>
                   <div className="flex flex-col md:flex-row border md:h-48">
                      <div className="md:w-[35%] h-48">
                        <Image src={room?.images[0] || 'noimage.png'} alt={room?.name || 'room image'} className="h-full w-full object-cover" width={400} height={400} />
                      </div>
                      <div className="md:w-[45%] px-5 overflow-hidden py-3">
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
                <div className="md:w-[30%] w-full border font-semibold p-6">
                  <BookingDetails price={Number(room?.price)} roomId={roomId} />
                </div>
            </div>
          </div>
     );
}
 
export default BookingPage;