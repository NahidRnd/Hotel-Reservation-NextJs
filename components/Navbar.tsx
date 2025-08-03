'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    
    return (
        // <nav className={`container ${ sticky || !homePage ? "dark-nav" : ""}`}>
        <nav className={`container ${pathname === '/' ? '' : 'bg-white text-[#606060]! transition duration-500'} flex justify-between items-center w-full text-white absolute py-6! !px-[10%] left-0 right-0`}>
            {/* <img src={`${ sticky || !homePage ? logo : logow}`} className="logo" /> */}
            <Image src={`${pathname === '/' ? '/logo-white.png' : '/logo.png'}`} alt="luxe haven" width={180} height={40} />
            <ul className="flex gap-6 font-bold">
                <li><Link href="/" className={`${(pathname === '/')?'text-primary' : ''} hover:text-primary py-2`}>Home</Link></li>
                <li><Link href="">About Us</Link></li>
                <li><Link href="/hotels">Hotels</Link></li>
                <li><Link href="">Top Destinations</Link></li>
                <li><Link href="">News</Link></li>
            </ul>
            <button className="btn">Book Online</button>
            {/* <User /> */}
        </nav>
    );
}
 
export default Navbar;