import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="" id="contact">
        <h2 className="text-center font-semibold text-2xl lg:text-3xl underline underline-offset-8 mb-5">
          Contact Me
        </h2>
        <div className="grid grid-cols-3">
          <div className="col-span-1 hidden bg-cyan-70 sm:flex justify-center items-center ">
            <Image src="/Steph.png" alt="" width={300} height={300} />
          </div>
          <div className="col-span-full sm:col-span-2 bg-cyan-60 flex flex-col justify-center items-center sm:items-start p-5">
            <h3 className="font-semibold text-2xl md:text-3xl my-4">
              aasegieme@gmail.com
            </h3>
            <div className="flex gap-8">
              <Link href="">
                <FaWhatsapp className="text-3xl" />
              </Link>
              <Link href="">
                <FaLinkedinIn className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
