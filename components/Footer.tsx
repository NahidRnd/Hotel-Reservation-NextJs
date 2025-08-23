import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
    return (
            <div className="border-t">
              <div className="container pt-12! flex flex-col md:flex-row justify-between gap-8 mr-[45px]">
                <div className="pr-[45px] footer-flex">
                    <Image src='/logo.png' alt="logo" className="w-[180px]" width={180} height={40} />
                    <p className="text-[15px]">
                    At Travel Nest, we simplify your travel planning by offering seamless hotel reservations. We provide a wide array of options tailored to your preferences, ensuring an unforgettable stay.
                    </p>
                </div>
                <div className="footer-flex">
                    <h3 className="text-[18px] font-semibold">
                        LATEST NEWS
                    </h3>
                    <ul className="flex flex-col gap-y-[8px] pt-5">
                        <li className="flex gap-[10px] items-center">
                        10 Things You Should Know
                        </li>
                        <li className="flex gap-[10px] items-center">
                        Live your myth in Greece
                        </li>
                        <li className="flex gap-[10px] items-center">
                        Post without feuatured image
                        </li>
                        <li className="flex gap-[10px] items-center">
                        Travel Nest in pictures
                        </li>
                        <li className="flex gap-[10px] items-center">
                        Travel Nest Weddings
                        </li>
                    </ul>
                </div>
                <div className="footer-flex">
                    <h3 className="text-[18px] font-semibold">
                    USEFUL LINKS
                    </h3>
                    <ul className="flex flex-col gap-y-[8px] pt-5">
                        <li className="flex gap-[10px] items-center">Gallery</li>
                        <li className="flex gap-[10px] items-center">Contact us</li>
                        <li className="flex gap-[10px] items-center">About us</li>
                        <li className="flex gap-[10px] items-center">My Bookings</li>
                        <li className="flex gap-[10px] items-center">Hotels</li>
                    </ul>
                </div>
                <div className="footer-flex">
                    <h3 className="text-[18px] font-semibold">
                    CONTACT US
                    </h3>
                    <ul className="flex flex-col gap-y-[8px] pt-5">
                        <li className="flex gap-[10px] items-center">
                            <IoLocationOutline />
                            123 Rue de Rivoli 75001 Paris, France
                        </li>
                        <li className="flex gap-[10px] items-center">
                            <FiPhone />
                            +33 1 23 45 67 89
                        </li>
                        <li className="flex gap-[10px] items-center">
                            <MdOutlineMailOutline />
                            info@travelnest.fr
                        </li>
                    </ul>
                    <div className="flex gap-5 pt-8">
                        <FaFacebookF size={22} className="hover:text-primary cursor-pointer" />
                        <FaInstagram size={22} className="hover:text-primary cursor-pointer" />
                        <FaPinterest size={22} className="hover:text-primary cursor-pointer" />
                        <TfiYoutube size={22} className="hover:text-primary cursor-pointer" />
                        <FaTwitter size={22} className="hover:text-primary cursor-pointer" />
                    </div>
                </div>
              </div>
            </div>
    );
}
 
export default Footer;