import { FaMobileAlt } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="" id="services">
        <h2 className="text-center font-semibold text-2xl lg:text-3xl underline underline-offset-8 mb-5">
          My Services
        </h2>
        <div className="grid sm:grid-cols-2">
          <div className="p-5 bg-slate-60 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <FaMobileAlt className="text-3xl" />
              <h3 className="text-2xl font-medium">Mobile App Design</h3>
            </div>
            <div className="text-lg tracking-wider lg:px-10 lg:text-xl text-justify">
              Integrating instant connection with the user base through a widely
              used an easy-to- access online window, thereby, promoting business
              reach
            </div>
          </div>
          <div className="p-5 bg-slate-70 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <FaGlobeAfrica className="text-3xl" />
              <h3 className="text-2xl font-medium">Web Design</h3>
            </div>
            <div className="text-lg tracking-wider lg:px-10 lg:text-xl text-justify">
              Crafting highly interactive and visually appealing designs for
              enriching smooth user interaction and engagement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
