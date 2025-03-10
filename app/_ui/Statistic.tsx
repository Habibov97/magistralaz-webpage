"use client";
import { Suspense } from "react";
import { StatisticTypes } from "../_types/statistic.types";
import AnimatedCounter from "./AnimatedCounter";

export default function Statistic({id,title, desc}: StatisticTypes) {
  const reduceMontion = false;

  return (
    <div className="py-10 flex flex-col items-center h-full max-h-[200px]">
      <div className="flex justify-center items-end">
      <span className="text-7xl font-extrabold text-gray-600 drop-shadow-md">{
        reduceMontion 
        ? 
        <span>{title}</span> 
        : 
        <Suspense fallback={<span>{title}</span>}>
          <AnimatedCounter from={0} to={title} /> 
        </Suspense>
      }</span> 
      <span className={`${id === 3 ? "text-6xl": "text-7xl"}  font-extrabold text-gray-600 drop-shadow-md`}>{id === 1 || id === 3 ? "+" : id === 2 ? "%"  : id === 4 ? "%" : ""}</span>
      </div>
        
        <p className="text-lg text-gray-400 tracking-wide mt-3">
            {desc}
        </p>
    </div>
  )
}