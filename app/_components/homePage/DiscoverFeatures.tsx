import section2Articles from "@/app/_mocks/section2.article.mocks"
import { articlePropsTypes } from "@/app/_types/article.types";
import Articles from "@/app/_ui/Articles";
import Heading from "@/app/_ui/Heading";
import { montserrat } from "@/app/layout"
import  Link  from "next/link";

function DiscoverFeatures() {

  //get article mockData
  const articles = section2Articles();
  
  return (
    <section className={`${montserrat.className} px-[5vw] bg-[url(/bg-section-layout.svg)] bg-cover bg-center bg-fixed `}>
        <div className="w-full max-w-7xl xl:max-w-[1400px] mx-auto py-[50px] flex flex-col ">
            
            <Heading title='Sürücülük Məktəbimizin Fərqləndirici Xüsusiyyətlərini Kəşf Edin' subtitle='Sürücülük dərslərimizdə keyfiyyətli təhsili və tələbələrin məmnuniyyətini prioritet hesab edirik. Xüsusiyyətlərimiz sizə ən yaxşı öyrənmə təcrübəsini təqdim etmək üçün hazırlanmışdır.' main='true'/>

            <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start gap-10 flex-wrap pb-30 ">
                {/* Articles */}
                {articles.map((article: articlePropsTypes) => (
                    <Articles key={article.id} {...article} />
                ))}
            </div>
            <div className="flex justify-center">
                <Link href="/about" className="relative px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-md transition-all duration-500 ease-in-out 
                 hover:bg-white/20 hover:shadow-xl hover:border-white/30">
                    Daha ətraflı →
                </Link>
            </div>
        </div>
    </section>
  )
}

export default DiscoverFeatures