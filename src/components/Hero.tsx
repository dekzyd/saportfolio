export default function Hero() {
  return (
    <div className="h-96 lg:h-[600px]">
      <div
        className="bg-cover bg-no-repeat bg-center h-full w-full"
        style={{ backgroundImage: `url(./background.jpeg)` }}
      >
        <div className="bg-gradient-to-r from-pink-800/80 to-pink-800/70 h-full flex">
          <div className="mx-auto max-w-3xl p-4 sm:px-6 lg:max-w-7xl lg:px-8 h-full -mt-1">
            <div className="flex flex-col justify-center gap-2 md:gap-4 h-full">
              {/* <p className="font-medium font-sans text-lg md:text-xl lg:text-2xl">
                👋 Hi
              </p> */}
              <p className="text-2xl leading-10 md:text-3xl lg:text-7xl">
                <span className="font-title text-[30px] md:text-[36px]">
                  I&apos;m{" "}
                </span>
                <span className="font-bold font-title text-[44px] leading-10 md:text-[56px] lg:text-9xl">
                  Stephanie Asegieme
                </span>
              </p>
              <p className="font-medium self-center font-sans text-xl md:text-2xl lg:text-2xl">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
