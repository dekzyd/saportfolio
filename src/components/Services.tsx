import { FaMobileAlt } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";

export default function Services() {
  return (
    <div className="mx-auto max-w-3xl my-5 px-4 sm:px-6 lg:max-w-6xl lg:px-7 md:h-96 md:my-10">
      <div className="" id="services">
        <h2 className="text-center font-sans font-semibold text-2xl lg:text-3xl  underline-offset-8 mb-5">
          My Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="lg:p-10 p-5 hover:bg-slate-300 hover:text-slate-800 bg-slate-100/5 rounded-lg transition ease-in-out duration-300">
            <div className="flex flex-col items-center gap-3 lg:py-4 rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <FaMobileAlt className="text-3xl" />
                <h3 className="text-2xl font-bold font-sans">
                  Mobile App Design
                </h3>
              </div>
              <div className="text-lg tracking-wider lg:w-[400px] lg:text-xl text-justify">
                Integrating instant connection with the user base through a
                widely used an easy-to- access online window, thereby, promoting
                business reach.
              </div>
            </div>
          </div>
          <div className="lg:p-10 p-5 hover:bg-slate-300 hover:text-slate-800 bg-slate-100/5 rounded-lg transition ease-in-out duration-300">
            <div className="flex flex-col items-center gap-3 lg:py-4 rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <FaGlobeAfrica className="text-3xl" />
                <h3 className="text-2xl font-bold font-sans">Web Design</h3>
              </div>
              <div className="text-lg tracking-wider lg:w-[400px] lg:text-xl text-justify">
                Crafting highly interactive and visually appealing designs for
                enriching smooth user interaction and engagement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
