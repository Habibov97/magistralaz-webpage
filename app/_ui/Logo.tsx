import Image from "next/image";
import Link from "next/link";



export default function Logo() {
  return (
    <div className="flex items-center gap-3">
    <div className="relative h-12 w-12 md:h-14 md:w-14">
      <Image
        src="/logo.png"
        alt="logo"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
    <Link href="/" className={`flex flex-col `}>
      <p className="text-xl md:text-2xl text-white leading-6 md:leading-8">
        MAGISTRAL.AZ
      </p>
      <p className="text-sm md:text-md text-orange-300 italic">
        sürücülük kursları
      </p>
    </Link>
  </div>
  )
}
