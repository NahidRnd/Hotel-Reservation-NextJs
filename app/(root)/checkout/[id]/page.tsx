import CheckoutSteps from "@/components/checkout-steps";
import { getRoomById } from "@/lib/actions/hotel.actions";
import { getUserInfo } from "@/lib/actions/user.actions";
import Link from "next/link";
import CheckoutBookingDetails from "./checkout-booking-details";
import CheckoutBookingButton from "./checkout-booking-button";


const CheckoutPage = async (props: {params: Promise<{id: string}>;}) => {
    const {id:roomId} = await props.params;
    const room = await getRoomById(roomId);
    if(!room) return null;
    // const safeRoom = {
    //     ...room,
    //     price: Number(room.price), 
    // };
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
            <CheckoutSteps current={2} />
            <div className="container flex flex-col pt-8! gap-[30px]">
                {room &&<CheckoutBookingDetails room={room} user={user} />}
                <CheckoutBookingButton room={room} />
            </div>
        </div>
     );
}
 
export default CheckoutPage;