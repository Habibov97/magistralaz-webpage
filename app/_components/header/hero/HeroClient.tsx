"use client";

import { usePathname } from "next/navigation";
import Hero from "./Hero";

export default function HeroClient() {
  const pathname = usePathname(); // Get the current path

  // Eger homepage deyilsen null 
  if (pathname !== "/") {
    return null;
  }

  return <Hero/>;
}
