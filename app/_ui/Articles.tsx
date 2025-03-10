import Image from "next/image";
import { articlePropsTypes } from "../_types/article.types";

export default function Articles({title, info, img }: articlePropsTypes) {
  return (
    <article className="flex flex-col gap-6 w-full h-full md:w-[400px] py-10 px-6 
    bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 
    hover:bg-white/20 transition-colors duration-300"
    >
    {/* IMAGE */}
      <div className="w-full h-[300px] md:w-[400px] relative overflow-hidden rounded-2xl shadow-md">
        <Image src={img} fill quality={70} alt="stockImg1" className="rounded-2xl object-cover transition-all duration-500 " />
      </div>

    {/* TITLE */}
    <h3 className="text-white text-3xl text-center leading-[1.35] min-h-[100px] font-semibold tracking-wide">
      {title}
    </h3>

    {/* DESCRIPTION */}
    <p className="text-white text-md text-center opacity-90 leading-[1.6]">
      {info}
    </p>
    </article>

  )
}
