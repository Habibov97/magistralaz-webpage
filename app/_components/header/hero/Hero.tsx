import Link from "next/link";

function Hero() {  
  return (
    <section className="relative mx-auto flex w-full max-w-7xl xl:max-w-[1400px] justify-center px-4 pt-[150px] pb-[40px] sm:justify-between sm:px-6 lg:px-8">
      
      {/* Restrict Gradient to Only Cover Text Area */}
      <div className="absolute top-30 rounded-2xl bottom-0 left-0 w-full sm:w-[55%] md:w-[85%]  bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      
      {/* Text Content Block */}
      <div 
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="2000" 
          className="relative z-10 flex w-full flex-col items-start justify-center gap-10 py-4 text-white sm:max-w-[500px] md:max-w-[680px] md:gap-5 lg:gap-5 xl:gap-10">
        
        <h1
          className="text-left text-[35px] leading-[1.25] font-bold tracking-wide opacity-95 transition-all duration-300 sm:text-[42px] md:text-[50px] xl:text-[58px] 2xl:text-[64px]"
        >
          Sən də Təhlükəsiz və Peşəkar Sürücü Olmaq İstəyirsən?
        </h1>
        
        <p
          className="pb-5 text-left text-[16px] leading-[1.5] opacity-85 transition-all duration-300 sm:text-[18px] md:text-[22px]"
        >
          Sürücülük üzrə ən yaxşı təcrübəni bizimlə qazanın! Təcrübəli təlimçi,
          rahat dərs qrafiki və real yol şəraitində təlimlər. Bizimlə birlikdə
          təhlükəsiz və inamlı sür!
        </p>

        <Link href="/contact"
          className="font-inter cursor-pointer rounded-lg border px-[24px] py-[12px] text-[1.1em] text-white transition-all duration-300 hover:bg-white hover:text-black active:bg-yellow-50 active:text-black sm:px-[30px] sm:py-[16px] md:px-[50px] md:py-[22px]"
        >
          Əlaqə yarat.
        </Link>
      </div>
    </section>
  );
}

export default Hero;
