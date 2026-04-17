import { motion } from "framer-motion";

const RollingTicker = ({ reverse = false }) => {
    const items = [
        "Tacos",
        "Tortas",
        "Quesadillas",
        "Enchiladas",
        "Protein Bowls",
    ];

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {[...items, ...items, ...items].map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 px-4"
                    >
                        <span className="text-3xl sm:text-5xl lg:text-7xl font-display houseofcards_bold italic uppercase tracking-tight text-transparent stroke-text">
                            {item}
                        </span>

                        <img
                            src="/assets/cactus flower.svg"
                            alt="flower"
                            className="w-6 sm:w-8 lg:w-10"
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
                    className={`h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 ${invert
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
        <section className="w-full min-h-screen bg-brand-green overflow-x-hidden">


            <div className="grid md:grid-cols-2 min-h-[65vh]">


                <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-12 gap-8">


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

                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display houseofcards_bold text-brand-cream leading-[0.9] uppercase">
                            ES HORA DE <br /> RELAJARSE
                        </h1>

                        <p className="max-w-md text-brand-cream text-lg sm:text-xl opacity-90 leading-snug">
                            Time to Chill Out with the All-New{" "}
                            <span className="font-bold uppercase">
                                AGUA FRESCAS!
                            </span>
                        </p>

                        <button className="mt-4 px-8 py-4 bg-brand-cream text-brand-green font-display houseofcards_bold text-xl rounded-full border-2 border-black shadow-[2px_5px_0px_black] hover:scale-105 active:scale-95 transition">
                            ORDER NOW
                        </button>
                    </div>
                </div>


                <div className="relative group overflow-hidden">
                    <img
                        src="/assets/eshorasectiondrinkimg.jpg"
                        alt="drink"
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />


                    <div className="absolute top-6 right-6  font-display   rotate-12 ">
                        <img src="/assets/new.svg"
                            className="w-15 h-15"
                        />
                    </div>
                </div>
            </div>


            <div className="bg-brand-cream relative  overflow-hidden">

                <div className="rotate-3 scale-120">


                    {[true, false, true, false].map((invert, idx) => (
                        <div key={idx} className="flex">
                            {createRow(invert)}
                        </div>
                    ))}

                    <div className="py-6">
                        <RollingTicker />
                        <RollingTicker reverse />
                        <RollingTicker />
                    </div>

                    {[true, false, true, false].map((invert, idx) => (
                        <div key={idx} className="flex">
                            {createRow(!invert)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}