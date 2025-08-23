import Link from "next/link";
import Testimonials from "./testimonials/Testimonials";

const Reviws = () => {
    return (
            <div className="container bg-[#f5f3f0]">
              <div className="flex gap-[30px] pb-[45px]">
                <div className="rev-title">
                  <h2 className='title'>What Guests say about us</h2>
                  <span className="py-5 px-0 text-center md:text-left">Some useful reviews from our guests on their experiences</span>
                </div>
                {/* <div className="text-right text-[16px] font-semibold">
                  <Link href="/testimonials">
                    View All Reviews<ArrowForwardIosIcon className="w-[13px] h-3 ml-[5px]" />
                  </Link>
                </div> */}
              </div>
              <Testimonials />
            </div>
    );
}
 
export default Reviws;