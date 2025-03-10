import { montserrat } from "@/app/layout";
import Image from "next/image";
import section1Img from "@/public/stockImg1.jpg";

function TrustYourself() {

  return (
    <section className={`${montserrat.className} px-[5vw] bg-purple-200`}>
    
      <div className=" w-full flex flex-col lg:flex-row lg:justify-between lg:items-start max-w-[1400px] mx-auto py-[50px] gap-5">  
        {/* Left Content Box */}
        <div className="flex flex-col max-w-[700px] gap-5 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl px-4 lg:px-5 py-4 lg:py-7 font-bold">
          <h2 className="text-black/75 text-4xl md:text-5xl leading-[1.35] pb-1 transition-all duration-300">
            Özünə güvənərək sür! Təhlükəsiz sürücülük yolculuğunuz buradan başlayır!
          </h2>
          <p className="text-black/75 text-sm sm:text-lg md:text-xl pb-3 transition-all duration-300">
            Sürücülük dərslərimizdə sizin təhlükəsizliyiniz və yolda uğurunuz ön plandadır. Təcrübəli müəllimlərimiz sizin öyrənmə stilinizə uyğunlaşdırılmış fərdi dərslər təqdim edir.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 md:flex-start md:gap-15">
            <div className="flex flex-col gap-3">
              <span className="text-black/75 text-2xl sm:text-3xl md:text-4xl">100%</span>
              <span className="text-black/75 text-md md:w-full md:max-w-[250px] transition-all duration-300">
                Peşəkar müəllimlər, geniş cədvəllər və sərfəli qiymətlər.
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-black/75 text-2xl sm:text-3xl md:text-4xl">Hazırsız?</span>
              <span className="text-black/75 text-md md:w-full md:max-w-[250px] transition-all duration-300">
                Elə bu gün bizə qoşulun və sürücülük yolculuğunuza başlayın!
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-square max-w-[600px] h-[300px] md:min-h-[580px]  transition-all duration-300">
          <Image src={section1Img} placeholder='blur' quality={80} fill className="object-cover rounded-2xl shadow-2xl" alt="heroImg" />
        </div>

      </div>
    </section>
  );
}

export default TrustYourself;
