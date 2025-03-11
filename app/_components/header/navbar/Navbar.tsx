"use client";

import Logo from "@/app/_ui/Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuPhone } from "react-icons/lu";

export const revalidate = 0;

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);


  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 w-full ${isVisible ? "bg-black/70 backdrop-blur-2xl transition-all duration-300" : "" } mx-auto w-full`}>
        <nav className="mx-auto flex w-full max-w-[1400px] px-[5vw] items-center justify-between py-5">
          {/* Logo */}
          <Logo/>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 lg:text-[1.1em] lg:text-white">
            <NavLinks />
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden text-white flex items-center cursor-pointer h-10 w-10 text-4xl "
          >
            <span>☰</span> 
          </button>
        </nav>
      </div>

      {/* Mobile view */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black z-50 transform transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-5 right-5 text-white text-4xl"
        >
          <IoMdClose />
        </button>
        <div className="flex flex-col justify-center h-full items-center gap-6 text-2xl text-white">
          <NavLinks onClick={() => setDrawerOpen(false)} />
        </div>
      </div>
    </>
  );
}

function NavLinks({
  onClick,

}: {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {

  return (
    <>
      <Link href="/" onClick={onClick} className={`relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full tracking-wider`}>
        Ana səhifə
      </Link>
      <Link
        href="/about"
        onClick={onClick}
        className={` relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full tracking-wider`}
      >
        Haqqımızda
      </Link>
      <Link
        href="/blog"
        onClick={onClick}
        className={` relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full tracking-wider`}
      >
        Blog
      </Link>
      <Link
        href="/contact"
        onClick={onClick}
        className={` relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full tracking-wider`}
      >
        Əlaqə
      </Link>
      <Link
        href="tel:0777176699"
        onClick={onClick}
        className={` flex items-center gap-2 rounded-sm border border-solid border-white px-5 py-4 transition-all duration-300 outline-none hover:bg-white hover:text-black active:bg-white active:text-black tracking-wider`}
      >
      <LuPhone className="text-2xl" />  077-717-66-99
      </Link>
    </>
  );
}

export default Navbar;
