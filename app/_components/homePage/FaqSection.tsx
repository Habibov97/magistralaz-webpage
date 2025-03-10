import getFaqData from "@/app/_mocks/section4.faq.mocks";
import { FaqTypes } from "@/app/_types/faq.types";
import Accordion from "@/app/_ui/Accordion";
import Heading from "@/app/_ui/Heading";
import { montserrat } from "@/app/layout";
import Link from "next/link";
import { Suspense } from "react";


export default function FaqSection() {

    const faqData = getFaqData();

  return (
    <section className={`${montserrat.className} px-[5vw] bg-[url(/bg-section-layout.svg)] bg-cover bg-center bg-fixed min-h-screen`}>
    <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center py-14">
        
        <Heading title="Tez-tez verilən suallar" subtitle="Sürücülük dərslərimiz və xidmətlərimizlə bağlı ən çox verilən suallara cavab tapın." main='true' />

        <div className="w-full max-w-[900px] flex flex-col pb-20">

            {faqData.map((data: FaqTypes, index: number) => (
                <Suspense fallback={<p>Loading...</p>} key={index}>
                    <Accordion key={data.id} {...data} />
                </Suspense>                   
            ))}
        </div>
      
        <div className="flex flex-col gap-5 justify-center items-center">  
            <h4 className="text-white text-4xl text-center leading-[1.35] pb-1 lg:text-5xl lg:leading-[1.25] xl:text-6xl xl:leading-[1.25]">
                Əlavə suallarınız var?
            </h4>
            <p className="text-white text-center text-md md:text-lg pb-10">
                Biz sizin üçün buradayıq. Elə indicə əlaqə saxlayın.
            </p>
            <div>
                <Link href="/contact" className="relative px-9 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-md transition-all duration-500 ease-in-out 
                hover:bg-white/20 hover:shadow-xl hover:border-white/30">
                    Əlaqə →
                </Link>
            </div>
        </div>
        </div>
    </section>

  )
}
