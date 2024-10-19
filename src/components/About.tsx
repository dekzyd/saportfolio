import Image from "next/image";
export default function About() {
  return (
    <div className="my-5 mx-auto bg-red-40 max-w-3xl px-4 sm:px-6 lg:max-w-6xl lg:px-8 md:my-10">
      <div className="" id="about">
        <h2 className="text-center font-sans font-semibold text-2xl lg:text-3xl  underline-offset-8 mb-5">
          About Me
        </h2>
        <div className="grid sm:grid-cols-2 bg-red-40">
          <div className="bg-slate-60 text-lg lg:text-xl md:text-justify tracking-wide lg:tracking-wider p-5 lg:px-24 flex items-center">
            I have a passion for simplicity and with a refined design
            sensibility, I create designs that are visually striking and highly
            professional. Let’s create something elegant that sets your brand
            apart from the rest!
          </div>
          <div className="bg-slate-20 flex justify-center">
            <Image
              className="w-96"
              height={300}
              width={300}
              alt="side image"
              src="/dessin.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
