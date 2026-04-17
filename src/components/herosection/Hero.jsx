export default function Hero() {


  const createRow = (invert = false) =>
    Array.from({ length: 20 }).map((_, i) => {
      const isEven = i % 2 === 0;

      return (
        <div
          key={i}
          className={`h-9 w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 ${invert
            ? isEven
              ? 'bg-brand-cream'
              : 'bg-transparent'
            : isEven
              ? 'bg-transparent'
              : 'bg-brand-cream'
            }`}
        />
      );
    });

  return (
    <section className="relative overflow-hidden bg-brand-cream flex flex-col items-center">

      <div className="w-full mx-auto flex flex-col items-center relative z-10">

        <h1
          className="absolute top-15 mmd:top-17  mlg:top-21 md:-top-4 lg:top-1    font-display text-[78px] mmd:text-[90px] mlg:text-8xl md:text-9xl lg:text-[190px]  font-bold houseofcards_bold text-brand-green leading-none text-center mb-4 tracking-tighter"
        >
          ¡QUÉ CHIDO!
        </h1>

        <div className="relative w-full">


          <img
            src="/assets/tacoherosectionimg_mobile.png"
            alt="Delicious Tortas"
            className="w-full h-auto md:hidden object-contain"
          />


          <img
            src="/assets/tacoherosectionimg_desktop.png"
            alt="Delicious Tortas"
            className="hidden md:block w-full h-auto object-contain "
          />


          <div className="absolute right-2 mmd:right-5 md:right-7 lg:right-25 xl:right-50 2xl:right-58  top-50  mmd:top-55 mlg:top-60 md:top-1/4 lg:top-1/3 xl:top-70 2xl:top-75 -rotate-3 ">
            <div className="relative flex items-center justify-center">

              <img
                src="/assets/offersticker.svg"
                className="w-32 h-32 mmd:w-32 mmd:h-32 mlg:w-35 mlg:h-35 md:w-46 md:h-46 xl:w-50 "
              />

              <div className="absolute inset-0 flex items-center justify-center -rotate-5 text-brand-cream text-center">
                <div className="mlg:leading-[0.7] md:leading-[0.9]">
                  <p className="text-4xl mlg:text-5xl md:text-6xl robotolab_bold">50%</p>
                  <p className="text-2xl mlg:text-2xl md:text-3xl robotolab_regular -mt-2 mlg:-mt-2 md:-mt-2">OFF</p>
                  <span className="block text-[8px] mlg:text-[8px] md:text-[10px] tracking-widest robotolab_regular -mt-1">
                    ON TORTAS
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="w-full absolute bottom-0 md:bottom-3 lg:bottom-5 z-10  overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-cream font-bold  text-sm md:text-lg lg:text-3xl tracking-[0.2em] mb-5 mmd:mb-8 mlg:mb-10 md:mb-2 lg:mb-3 xl:mb-8">
            VAMOS! LIMITED TIME OFFER
          </p>
        </div>


        <div className="flex flex-col justify-center w-full overflow-hidden">

          <div className="flex flex-nowrap">
            {[...Array(4)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex flex-nowrap">
                {createRow(true)}
              </div>
            ))}
          </div>

          <div className="flex flex-nowrap">
            {[...Array(4)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex flex-nowrap">
                {createRow(false)}
              </div>
            ))}
          </div>




        </div>

      </div>
    </section>
  );
}