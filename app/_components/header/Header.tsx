"use client";
import React from "react";
import { usePathname } from "next/navigation";

function Header({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
      <header
        className={`relative px-[5vw] ${
          pathname === "/"
            ? "min-h-screen bg-[url(/heroImg2.jpg)] bg-cover bg-center sm:bg-fixed"
            : "min-h-[100px] bg-[url(/bg-section-layout.svg)] bg-cover border-b border-white/30  "
        }`}
      >
        {/* Only add the overlay on the homepage */}
        {pathname === "/" && (
          <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        )}
        <div className="relative">{children}</div>
      </header>
  );
}

export default Header;
