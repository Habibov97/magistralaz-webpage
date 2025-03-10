"use client";
import Link from "next/link";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
export default function Footer() {
    const year = new Date().getFullYear();

  return (   
    <footer className="bg-black shadow-sm">
        <div className="w-full max-w-screen-xl xl:max-w-[1400px]  mx-auto p-4 md:py-10">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="/" className="flex gap-3 justify-start sm:justify-between items-center py-4 sm:py-0 ">
                    <img src="/logo.png" className="h-10 w-10" alt="Flowbite Logo" />
                    <span className="text-xl text-white font-logo leading-6 md:leading-8">MAGISTRAL.AZ</span>
                </Link>
                <ul className="flex py-4 flex-col sm:flex-row  items-start sm:items-center mb-6 text-md gap-4 sm:text-sm font-medium sm:mb-0">
                    <li>
                        <Link href="/about" className="hover:underline me-4 md:me-6  text-gray-400 hover:text-gray-50 transition-all duration-300">Haqqımızda</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:underline me-4 md:me-6 text-gray-400 hover:text-gray-50 transition-all duration-300">Bloq</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:underline text-gray-400 hover:text-gray-50 transition-all duration-300">Əlaqə</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
            <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-gray-400 sm:text-center">
                    <Link href={"https://www.linkedin.com/in/najafhabibov/"}>
                        Powered by Najaf Habibov
                    </Link> 
                </span>
                <span className="text-sm text-gray-400 sm:text-center">
                    © {year} Bütün hüquqlar qorunur.
                </span>
                <div className="flex gap-4 items-center pr-[55px]">
                    <Link href={"https://wa.me/+994707176699"} target="_blank" className="text-3xl  cursor-pointer text-gray-400 hover:text-gray-50 transition-all duration-300" ><FaWhatsapp /></Link>
                    <Link href={"https://www.youtube.com/@magistralaz"} target="_blank" className="text-3xl cursor-pointer text-gray-400 hover:text-gray-50 transition-all duration-300" ><FaYoutube/></Link>
                    <Link  href={"https://www.instagram.com/magistral.az/"} target="_blank" className="text-3xl  cursor-pointer text-gray-400 hover:text-gray-50 transition-all duration-300" ><FaInstagram/></Link>
                </div>   
            </div>
        </div>
    </footer>
  )
}
