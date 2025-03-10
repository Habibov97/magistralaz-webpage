import getSectionStatistics from "@/app/_mocks/section3.statistics.mocks";
import { StatisticTypes } from "@/app/_types/statistic.types";
import Statistic from "@/app/_ui/Statistic";
import { lato } from "@/app/layout";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default function Statistics() {
    const statistics = getSectionStatistics();
    
    return (
        <section className={`${lato.className} relative px-[5vw] bg-purple-200 overflow-hidden`}>
            {/* Content Wrapper */}
           
                <div className="relative w-full max-w-[1400px] mx-auto py-[50px] flex justify-between items-center gap-12 overflow-x-scroll">
                    {statistics.map((stat: StatisticTypes) => (
                         <Suspense fallback={<Loading/>} key={stat.id}>
                             <Statistic key={stat.id} {...stat} />
                         </Suspense>
                    ))}
                </div>  

        </section>
    );
}
