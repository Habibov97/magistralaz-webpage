"use client"

import React, { useState } from "react";
import { FaqTypes } from "../_types/faq.types";

const Accordion = ({ title, answer }: FaqTypes) => {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  function handleAccordionToggle(){
    setAccordionOpen(!accordionOpen)
  }


  return (
    <div className="py-2">
      <button
        onClick={handleAccordionToggle}
        className="flex justify-between items-center w-full px-6 py-4 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/10 transition-all duration-300"
      >
        {/* Title with Lighter Color */}
        <span className="text-gray-200 font-semibold text-sm text-start md:text-lg tracking-wider">{title}</span>
        
        {/* SVG Icon for Accordion */}
        <svg
          className="fill-violet-200 shrink-0 ml-8 transition-transform duration-300 ease-out"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition-all duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition-all duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      
      {/* Accordion Content with Animated Opening */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-lg mt-4 ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm lg:text-lg px-4 tracking-wide">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
