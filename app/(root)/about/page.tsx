import { getBestPriceHotelRoom } from "@/lib/actions/hotel.actions";
import { HotelCity } from "@/types";
import Image from "next/image";
import Link from "next/link";

const AboutPage = async () => {
    const data = await getBestPriceHotelRoom();
    return ( 
        <div className="pt-[100px]">
            <div className="bg-cream text-ash">
              <div className="container flex justify-between items-center">
                <div className="">
                  <h2>About Us</h2>
                  <ul className="flex">
                    <li>
                      <Link className="breadcrumb" href="/">Home</Link>
                    </li>
                    <li>
                      About us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container">
                <div className="flex gap-16 items-center">
                    <div className="w-[55%]">
                        <h2 className="text-3xl font-semibold mb-6 text-ash">Luxury Haven</h2>
                        <p>Welcome to Luxury Haven, where elegance meets intention, and every detail tells a story.</p>
                        <p>We began with a vision: to redefine luxury as something deeply personal, purposeful, and timeless. From curated experiences to bespoke products, our mission is to inspire a life of beauty, balance, and bold self-expression.</p>
                        <p className="pt-3">What sets us apart? We believe true luxury is rooted in authenticity, sustainability, and soulful design. Every item we offer and every experience we craft is infused with care, creativity, and a commitment to excellence.</p>
                        <p className="pt-3">Our team is a collective of designers, storytellers, and visionaries — each bringing their unique perspective to create moments that matter. Whether you&apos;re seeking serenity, sophistication, or a spark of inspiration, Luxury Haven is your sanctuary.</p>
                        <p>Thank you for joining us on this journey. We&apos;re here to elevate the everyday, celebrate individuality, and build a community that values quality over quantity.</p>
                        <p className="pt-3 font-semibold">Welcome to your haven. Let&apos;s create something extraordinary.</p>
                    </div>
                    <div className="flex gap-6">
                        <Image src='/about-1.webp' alt="Abou us page pic 1" width={265} height={529} />
                        <Image src='/about-2.webp' alt="Abou us page pic 2" width={265} height={529} className="-mb-8 pt-8" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-6 text-ash pt-30">Features</h2>
                    <div className="flex gap-6 pb-4">
                        <div className="bg-[url('/hotel.png')] w-84 h-34 py-8 px-1 bg-center bg-no-repeat border rounded-md text-center">
                            <div className="text-3xl font-semibold text-ash">+150</div>
                            <div className="text-xl font-semibold">Hotels</div>
                        </div>
                        <div className="bg-[url('/tray.png')] w-84 h-34 py-8 px-1 bg-center bg-no-repeat border rounded-md text-center">
                            <div className="text-3xl font-semibold text-ash">+200</div>
                            <div className="text-xl font-semibold">Restaurants</div>
                        </div>
                        <div className="bg-[url('/staff-1.png')] w-84 h-34 py-8 px-1 bg-center bg-no-repeat border rounded-md text-center">
                            <div className="text-3xl font-semibold text-ash">+25</div>
                            <div className="text-xl font-semibold">Staffs</div>
                        </div>
                        <div className="bg-[url('/swimming-pool.png')] w-84 h-34 py-8 px-1 bg-center bg-no-repeat border rounded-md text-center">
                            <div className="text-3xl font-semibold text-ash">+30</div>
                            <div className="text-xl font-semibold">Swimming Pools</div>
                        </div>
                    </div>
                    <p>
                        Discover a sanctuary of comfort and elegance where every detail is crafted to enhance your stay. With 50 beautifully appointed rooms, two gourmet restaurants, and a team of 18 dedicated staff members, our hotel offers a seamless blend of luxury and hospitality. Whether you&apos;re unwinding in one of our three swimming pools, hosting a meeting in our fully equipped conference rooms, or indulging in rejuvenation at our spa and wellness center — complete with five massage rooms — you&apos;ll find everything you need to relax, recharge, and reconnect. Families are welcome too, with a safe playground designed for our youngest guests. At every turn, we&apos;re here to make your experience unforgettable.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-6 text-ash pt-20">Team Members</h2>
                    <div className="flex gap-6 text-center">
                        <div className="border rounded-sm w-[280px]">
                            <Image src='/member-3.png' alt="Team Members" width={280} height={280} className="h-[280px] w-[280px] object-cover rounded-t-sm" />
                            <div className="py-6">
                                <h5 className="text-lg font-semibold mb-2 text-ash">Marco Bellini</h5>
                                <p className="px-4">Born and raised in Italy, Chef infuses every dish with Mediterranean soul and culinary artistry.</p>
                            </div>
                        </div>
                        <div className="border rounded-sm w-[280px]">
                            <Image src='/member-1.png' alt="Team Members" width={280} height={280} className="h-[280px] w-[280px] object-cover rounded-t-sm" />
                            <span className="absolute text-white bottom-0">Housekeeper</span>
                            <div className="py-6">
                                <h5 className="text-lg font-semibold mb-2 text-ash">Lina Rodriguez</h5>
                                <p className="px-4">Originally from Colombia, Lina is known for her meticulous attention to detail and her warm.</p>
                            </div>
                        </div>
                        <div className="border rounded-sm w-[280px]">
                            <Image src='/member-4.png' alt="Team Members" width={280} height={280} className="h-[280px] w-[280px] object-cover rounded-t-sm" />
                            <div className="py-6">
                                <h5 className="text-lg font-semibold mb-2 text-ash">Aisha Khan</h5>
                                <p className="px-4">With roots in Pakistan and training in holistic wellness, Aisha&apos;s soothing presence and skilled.</p>
                            </div>
                        </div>
                        <div className="border rounded-sm w-[280px]">
                            <Image src='/member-2.png' alt="Team Members" width={280} height={280} className="h-[280px] w-[280px] object-cover rounded-t-sm" />
                            <div className="py-6">
                                <h5 className="text-lg font-semibold mb-2 text-ash">Daniel Meier</h5>
                                <p className="px-4">A seasoned hospitality expert from Switzerland, Daniel brings charm, precision, and a calm.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bg-[#f5f3f0] py-[50px]!">
                <h2 className="text-3xl font-semibold mb-6 text-ash">Visit Our Hotels</h2>
                <div className="flex gap-6">
                {data.map((item: HotelCity) => {
                    return(
                        <div key={item.id} className="bg-white border rounded-sm relative overflow-hidden">    
                            <Link href={`hotels/${item.id}`}>
                                <div className="overflow-hidden w-[385px]">
                                    <Image src={item.coverImage} alt={item.name} width={420} height={200} className="rounded-t h-[400px] transition-transform duration-1000 ease-[cubic-bezier(0,1,.5,1)] hover:translate-x-4 scale-120" />
                                </div>
                            </Link>                     
                            <p className="absolute top-3 right-3 bg-black/20 text-white py-[2px] px-[10px] rounded-xs leading-6 text-sm transition duration-300">
                            € {Number(item.rooms[0].price)} / 
                            <span> night</span>
                            </p>
                            <div className="px-10 py-3">
                                <Link key={item.id} href={`hotels/${item.id}`}>
                                    <h5 className="text-lg font-semibold mb-2 text-ash text-center">{item.name}</h5>
                                </Link>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
     );
}
 
export default AboutPage;