import { motion } from "framer-motion";

const RollingTicker = ({ reverse = false }) => {
    const items = [

        "Tortas",
        "Quesadillas",
        "Enchiladas",
        "Protein Bowls",
        "Tacos",
    ];

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                className="flex whitespace-nowrap w-max"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 ">
                        <span className="text-5xl lg:text-7xl font-display houseofcards_bold italic uppercase tracking-tight text-transparent stroke-text">
                            {item}
                        </span>

                        <img
                            src="/assets/cactus flower.svg"
                            alt="flower"
                            className="w-20"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Eshora() {

    
    const createRow = (invert = false) =>
        Array.from({ length: 40 }).map((_, i) => {
            const even = i % 2 === 0;

            return (
                <div
                    key={i}
                    className={`flex-1 aspect-square ${
                        invert
                            ? even
                                ? "bg-brand-green"
                                : "bg-transparent"
                            : even
                                ? "bg-transparent"
                                : "bg-brand-green"
                    }`}
                />
            );
        });

    return (
        <section className="w-full  bg-brand-green overflow-x-hidden">

            
            <div className="grid md:grid-cols-2 ">

                
                <div className="relative flex flex-col justify-center px-10 lg:px-20 xl:px-25 py-12 gap-8">

                    <div
                        className="absolute inset-0 opacity-80"
                        style={{
                            backgroundImage: "url('/assets/cactus.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "180px",
                        }}
                    />

                    <div className="relative z-10 space-y-6">

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-display houseofcards_bold text-brand-cream leading-[0.9] uppercase">
                            ES HORA DE <br /> RELAJARSE
                        </h1>

                        <p className="text-brand-cream robotolab_regular max-w-45 md:max-w-50 xl:max-w-65  text-xl sm:text-2xl xl:text-3xl opacity-90 leading-snug">
                            Time to Chill Out with the All-New<br/>
                            <span className="font-bold uppercase">
                                AGUA FRESCAS!
                            </span>
                        </p>

                        <button className="mt-4 px-8 py-3  bg-brand-cream text-brand-green font-display houseofcards_bold text-2xl rounded-full border-2 border-black shadow-[2px_5px_0px_black] hover:scale-105 active:scale-95 transition">
                            ORDER NOW
                        </button>
                    </div>
                </div>

                <div className="relative group overflow-hidden">
                    <img
                        src="/assets/eshorasectiondrinkimg.jpg"
                        alt="drink"
                        className="w-full h-full object-cover "
                    />

                    <div className="absolute top-10 right-12 lg:top-13 xl:right-22  2xl:top-15 rotate-5">
                        <img
                            src="/assets/newsticker.svg"
                            className="w-22 h-22  md:w-35 md:h-35  "
                            alt="new"
                        />
                         <div className="absolute inset-0 flex items-center justify-center rotate-10 text-brand-cream text-center">
                <div className="mlg:leading-[0.7] md:leading-[0.9]">
                  <p className="text-3xl mlg:text-4xl md:text-5xl houseofcards_bold">New!</p>
                 
                </div>
              </div>
                    </div>
                </div>
            </div>

           
            <div className="bg-brand-cream relative overflow-hidden">

                <div className="rotate-3 scale-110 md-scale-[1.2]">

              
                    {[true, false, true, false].map((invert, idx) => (
                        <div key={idx} className="flex w-full">
                            {createRow(invert)}
                        </div>
                    ))}

              
                    <div className="py-4">
                        <RollingTicker />
                        <RollingTicker reverse />
                        <RollingTicker />
                        <RollingTicker reverse />
                    </div>

                    
                    {[true, false, true, false].map((invert, idx) => (
                        <div key={idx} className="flex w-full">
                            {createRow(!invert)}
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}




              