import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import ContactForm from "./contact-form";
import ContactMap from "./contact-map";

const ContactPage = () => {
    return ( 
        <div className="pt-[100px]">
            <div className="bg-cream text-ash">
              <div className="container flex justify-between items-center">
                <div className="">
                  <h2>Contact Us</h2>
                  <ul className="flex">
                    <li>
                      <Link className="breadcrumb" href="/">Home</Link>
                    </li>
                    <li>
                      Contact us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="">
                <div className="container flex gap-10">
                    <div className="w-[60%]">
                        <h2 className="text-3xl font-semibold mb-3 text-ash">Contact Form</h2>
                        <ContactForm />
                    </div>
                    <div className="w-[40%]">
                        <h2 className="text-3xl font-semibold mb-3 text-ash">Contact Information</h2>
                        <ul className="flex flex-col gap-y-[8px] pt-5">
                            <li className="flex gap-[10px] items-center">
                                <IoLocationOutline />
                                123 Rue de Rivoli 75001 Paris, France
                            </li>
                            <li className="flex gap-[10px] items-center">
                                <FiPhone />
                                <Link href="tel:" className="hover:underline">+33 1 23 45 67 89</Link>
                            </li>
                            <li className="flex gap-[10px] items-center">
                                <MdOutlineMailOutline />
                                <Link href="mailto:info@luxuryhaven.fr" className="hover:underline">info@luxuryhaven.fr</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ContactMap />
                </div>
            </div>
        </div>
     );
}
 
export default ContactPage;