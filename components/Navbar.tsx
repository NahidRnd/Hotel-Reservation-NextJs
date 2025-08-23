'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className={`container ${pathname === '/' ? '' : 'bg-white text-[#606060]! transition duration-500'} flex justify-between items-center w-full text-white absolute py-6! !px-2 md:!px-[10%] left-0 right-0`}> 
            <Image src={`${pathname === '/' ? '/logo-white.png' : '/logo.png'}`} alt="luxe haven" width={180} height={40} />
            {menuOpen ? <FaTimes className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} /> : <HiMenuAlt3 className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)} /> }
            <ul className={`md:flex md:opacity-100! gap-6 font-bold md:translate-none md:static fixed md:left-auto left-0 md:transform-none transform transition-transform duration-400 ease-in-out ${menuOpen ? 'flex-col absolute bg-white text-ash w-[85%] mr-10 px-10 py-4 mt-10 translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <li><Link href="/" className={`${(pathname === '/')?'text-primary' : ''} hover:text-primary py-2`}>Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/hotels">Hotels</Link></li>
                <li><Link href="">Top Destinations</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="">News</Link></li>
            </ul>
            <Link href='/hotels' className="hidden md:block btn">Book Online</Link>
        </nav>
    );
}
 
export default Navbar;