import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <nav className="flex justify-between py-3">
        <div className="w-6 h-6 md:w-9 md:h-9">
          <Image src="/Logo.png" width={300} height={300} alt="" />
        </div>
        <ul className="flex justify-between items-center gap-2 md:gap-5">
          <Link href="#about">
            <li className="text-sm md:text-base md:px-2 md:py-1 rounded-md hover:bg-slate-100 hover:text-slate-900 transition ease-in-out duration-300">
              About
            </li>
          </Link>
          <Link href="#services">
            <li className="text-sm md:text-base md:px-2 md:py-1 rounded-md hover:bg-slate-100 hover:text-slate-900 transition ease-in-out duration-300">
              Services
            </li>
          </Link>
          <Link href="#contact">
            <li className="text-sm md:text-base md:px-2 md:py-1 rounded-md hover:bg-slate-100 hover:text-slate-900 transition ease-in-out duration-300">
              Contact
            </li>
          </Link>
          <a
            href="https://drive.google.com/file/d/1IZWqmwdrQLn8W8eyjTh_6a3ujV_lEZHR/view?usp=drive_link"
            target="_blank"
          >
            <li className="text-sm md:text-base md:px-2 md:py-1 rounded-md hover:bg-slate-100 hover:text-slate-900 transition ease-in-out duration-300">
              View CV
            </li>
          </a>
        </ul>
      </nav>
    </div>
  );
}
