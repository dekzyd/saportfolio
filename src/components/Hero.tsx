export default function Hero() {
  return (
    <div className="bg-red-300 h-96">
      <div
        className="bg-cover bg-no-repeat bg-center h-full w-full"
        style={{ backgroundImage: `url(./background.jpeg)` }}
      >
        <div className="bg-gradient-to-r from-pink-800/70 to-pink-800/60 h-full">
          <div className="mx-auto max-w-3xl p-4 sm:px-6 lg:max-w-7xl lg:px-8 h-full">
            <div className="flex flex-col justify-center gap-3 md:gap-5 h-full">
              <p className="font-medium text-xl md:text-2xl lg:text-3xl">
                👋 Hi
              </p>
              <p className="text-2xl md:text-3xl  lg:text-7xl">
                I&apos;m{" "}
                <span className="font-semibold">Stephanie Asegieme</span>
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-2xl">
                UI/UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
