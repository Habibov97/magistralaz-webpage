import { Metadata } from "next";
import { montserrat } from "../layout";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
//import ContactForm from "../_ui/ContactForm";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Bizimlə əlaqə",
};

export default function Page() {
  return (
    <section className={`${montserrat.className} px-[5vw] bg-purple-100`}>
      <div className="mx-auto w-full max-w-[1300px] min-h-[90vh] py-12 flex flex-col items-center">
        <h2 className="text-gray-800/90 font-bold text-4xl md:text-6xl pb-15 text-center">
          Əlaqə
        </h2>
        
        <div className="w-full flex flex-col md:flex-row gap-17 justify-center items-start">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col gap-6 text-lg md:text-xl bg-white p-6 rounded-2xl shadow-lg w-full md:w-[45%]">
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 border-b border-gray-300 pb-2">
              Əlaqə məlumatlarımız
            </h3>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-800 text-2xl" />
              <Link href="https://maps.app.goo.gl/YupYdrBans4XS9Fa9"> 
              <span className="hover:opacity-50 transition-all duration-300">Xalqlar Dostluğu M/st yaxınlığı</span> </Link>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-purple-800 text-2xl" />
              <Link href="tel:+994707176699"> <span className="hover:opacity-50 transition-all duration-300" >077-717-66-99</span>  </Link>
            </div>
            <div className="flex items-center gap-4">
              <SiGmail className="text-purple-800 text-2xl" />
              <Link href="mailto:magistralsuruculuk@gmail.com">  <span className="hover:opacity-50 transition-all duration-300">magistralaz@gmail.com</span> </Link>
                
            </div>
            <div className="flex items-center gap-4 pb-6">
              <FaClock className="text-purple-800 text-2xl" />
              <p>Hər gün 06:00 - 0:00</p>
            </div>
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 border-b border-gray-300 pb-1">
                Sosial media
            </h3>

           <div className="flex gap-4 items-center ">
                <Link href={"https://wa.me/+994707176699"} target="_blank" className="group flex items-center justify-center p-3 rounded-xl bg-green-200 hover:bg-green-600 transition-all duration-300" ><FaWhatsapp className="text-gray-700 text-3xl transition-all duration-300 group-hover:text-white" /></Link>

                <Link href={"https://www.youtube.com/@magistralaz"} target="_blank" className="group flex items-center justify-center p-3 rounded-xl bg-red-200 hover:bg-red-600 transition-all duration-300" ><FaYoutube className="text-gray-700 text-3xl transition-all duration-300 group-hover:text-white " /></Link>

                <Link  href={"https://www.instagram.com/magistral.az/"} target="_blank"  className="group flex items-center justify-center p-3 rounded-xl bg-gray-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737]" ><FaInstagram className="text-gray-700 text-3xl transition-all duration-300 group-hover:text-white" /></Link>
                </div>  
           </div>

          {/* Right Side - Map */}
            <div className="w-full md:w-[45%] flex flex-col bg-white p-6 rounded-2xl shadow-lg h-[470px]">
            <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.90234810828042!2d49.947872600511616!3d40.39915627719155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1741602843303!5m2!1sen!2saz"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </section>
  );
}
