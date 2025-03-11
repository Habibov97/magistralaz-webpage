import { Metadata } from "next";
import { montserrat } from "../layout";
import Heading from "../_ui/Heading";

export const metadata: Metadata = {
    title: "Haqqımızda"
};

export default function Page() {
    return (
        <section className={`${montserrat.className} px-[5vw] bg-[url(/bg-section-layout.svg)] bg-center bg-cover bg-fixed relative`}>
            {/* Gradient Overlay for better text visibility */}
            <div className="w-full max-w-[1400px] min-h-screen mx-auto flex flex-col lg:flex-row justify-center items-start">
                <div className="w-full max-w-[900px] mx-auto flex flex-col  rounded-2xl p-5">
                    {/* Heading */}
                    <Heading title="Haqqımızda" subtitle="Artıq 5 ildən çoxdurki fəaliyyət göstərən professional sürücülük kursuyuq!"/>
                    <p 
                    data-aos="fade-up" 
                    data-aos-delay="300" 
                    data-aos-duration="1000" 
                    className="text-white text-sm sm:text-md md:text-lg lg:text-xl leading-relaxed tracking-wide bg-white/10 backdrop-blur-xl rounded-3xl shadow-md border border-white/20 
                    transition-colors duration-300 p-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab eius recusandae temporibus, quam repudiandae officia id? Tenetur fuga, voluptatibus officia magni molestias ipsum facilis eaque fugit tempore, quidem recusandae adipisci sit, quibusdam soluta tempora repudiandae? Minus veniam eaque, architecto pariatur, aperiam laudantium impedit soluta ratione dicta quam maxime natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam autem saepe in, cumque maiores recusandae, fugiat officia, fugit nesciunt repellat non aspernatur ut atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima possimus exercitationem facilis perferendis saepe, laboriosam reprehenderit optio ratione aperiam nam aliquid quia beatae accusantium earum a iusto dolores nemo voluptatum autem atque numquam! Eaque, reiciendis! Non excepturi eos, nisi molestias quae recusandae blanditiis harum cum neque voluptas magnam voluptatibus alias.
                    </p>
                </div>
            </div>
        </section>
    );
}
