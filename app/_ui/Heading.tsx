
type HeadingProps = {
    title: string,
    subtitle: string,
    main?: string
}

export default function Heading({title, subtitle, main}: HeadingProps) {

    if (main) {
        return (
            <div className="flex flex-col justify-center items-center w-full max-w-[900px] mx-auto gap-10 pb-15 aos-init"
                        data-aos="fade-up"
                        data-aos-duration="500"
                        >
                            <h2 className="text-white text-4xl text-center leading-[1.35] pb-1 lg:text-5xl lg:leading-[1.25] xl:text-6xl xl:leading-[1.25] ">{title}</h2>
                            <p className="text-white w-full text-center text-md  md:text-lg aos-init">{subtitle}</p>
                        </div>
        )
    }

  return (
    <div          
    className="flex flex-col gap-4 justify-center items-center py-15 aos-init">
        <h2 className="text-white font-bold text-4xl text-center pb-5 lg:text-6xl tracking-wider transition-all duration-500 ">
            {title}
        </h2>
        <p className="text-white text-center md:text-center text-sm md:text-lg lg:text-xl tracking-wider transition-all duration-500">{subtitle}</p>
    </div>
  )
}
