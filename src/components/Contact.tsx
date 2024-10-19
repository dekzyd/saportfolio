import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-6xl lg:px-8 md:my-10">
      <div className="" id="contact">
        <h2 className="text-center font-sans font-semibold text-2xl lg:text-3xl  underline-offset-8 mb-5">
          Contact Me
        </h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 lg:px-20 md:px-10 pt-10 hidden bg-slate-600/5 sm:flex justify-center items-center rounded-lg ">
            <Image src="/Steph.png" alt="" width={300} height={300} />
          </div>
          <div className="col-span-full sm:col-span-2 bg-slate-600/5 rounded-lg  flex flex-col justify-center items-center p-5">
            <p className="font-semibold text-xl font-sans lg:text-3xl text-center">
              Let&apos;s make something awesome together.
            </p>
            <h3 className="font-semibold text-2xl md:text-3xl font-sans lg:text-5xl my-4">
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
