"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 md:bottom-9 md:right-8 z-40 p-3 rounded-xl bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl
        before:absolute before:inset-0 before:rounded-xl before:bg-indigo-600 before:opacity-40 before:animate-ping
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
    >
      <IoIosArrowUp className="w-6 h-6 relative z-10" />
    </button>
  );
}
