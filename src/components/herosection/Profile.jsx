import React from 'react';

const MENU_ITEMS = [
  {
    id: 'El-Jefe',
    name: 'EL JEFE',
    description:
      'Literally the Boss of lunchtime! Sort out your cravings and then some with our special enchilada lunch, served with rice and beans.',
    image: '/assets/profilessectionimg.png',
    tabColor: 'bg-[url(/assets/profilesbgsheet.jpg)]',
  },
  {
    id: 'La-Corazon',
    name: 'LA CORAZON',
    tabColor: 'bg-brand-green',
  },
  {
    id: 'Gordito',
    name: 'GORDITO',
    tabColor: 'bg-brand-orange',
  },
];

export default function Profile() {
  const activeTab = MENU_ITEMS[0];

  return (
    <div className=" bg-brand-cream flex flex-col items-center py-10 px-4 sm:px-6 lg:px-10 font-typewriter selection:bg-brand-orange selection:text-white overflow-x-hidden">

      
      <div className="mb-2 lg:mb-4   text-center relative max-w-62 mlg:max-w-72 lg:max-w-96   px-4">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-1 bg-brand-orange flex-1" />
          <span className="text-brand-orange robotolab_regular font-display text-xl tracking-widest uppercase">
            The
          </span>
          <div className="h-1 bg-brand-orange flex-1" />
        </div>

        <h1 className="text-brand-green font-display houseofcards_bold text-6xl mlg:text-7xl lg:text-[95px] tracking-tighter leading-none drop-shadow-sm">
          PRO-FILES
        </h1>
      </div>

      <div className="w-full max-w-3xl xl:max-w-4xl relative py-4 px-4 mmd:px-8 md:px-10 lg:px-2 -rotate-4">

        <div className="flex items-center overflow-hidden ">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative px-1 mmd:px-2 lg:px-4 py-0.5 lg:py-2 xl:py-3 rounded-tl-4xl rounded-tr-[80px] text-sm sm:text-base lg:text-2xl xl:text-3xl font-bold whitespace-nowrap ${item.tabColor} text-black z-20 -mb-0.5 min-w-20 mlg:min-w-25 md:min-w-45 lg:min-w-60 xl:min-w-70`}
            >
              <span className="relative z-10 houseofcards_bold">
                {item.id.replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>

   
        <div className="bg-[url(/assets/profilesbgsheet.jpg)] p-5 mlg:px-5 mlg:py-10 md:p-10 relative overflow-hidden rounded-tr-2xl rounded-b-2xl">

          <div className="grid grid-cols-2 md:gap-8 items-start md:items-center">

          
            <div className="mlg:space-y-3 md:space-y-6 order-1">
              <h2 className="text-black font-display text-4xl mlg:text-[45px] md:text-7xl lg:text-8xl  houseofcards_bold leading-none relative ">
                <span className="relative z-10 text-shadow-orange">{activeTab.name}</span>
              
              </h2>

              <p className="text-black/80 text-[9px] mmd:text-[12px] mlg:text-sm md:text-lg lg:text-2xl xl:text-3xl leading-relaxed houseofcards_bold max-w-32 md:max-w-md">
                {activeTab.description}
              </p>

              <button className="bg-black text-brand-cream px-3 mlg:px-5 mlg:py-2 md:px-8 md:py-3 xl:px-10 rounded-full font-display text-sm mlg:text-lg md:text-2xl lg:text-4xl xl:text-5xl border-2 houseofcards_bold border-brand-cream shadow-[1px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all flex items-center gap-2">
                ORDER NOW
              </button>
            </div>

          
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-full">
                <div className="overflow-hidden">
                  <img
                    src={activeTab.image}
                    alt={activeTab.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-4 lg:mt-10 xl:mt-12 px-4">
        <button className="group relative bg-transparent border-[3px] border-black px-8 py-2 mlg:px-10 mlg:py-2 md:px-12 md:py-4 lg:px-15 rounded-full houseofcards_bold font-display text-xl mlg:text-2xl md:text-4xl lg:text-5xl  transition-all text-brand-orange flex items-center gap-3 shadow-[1px_4px_0px_rgba(228,83,30,1)]">
          VIEW FULL MENU
          <div className="absolute -bottom-2 -right-2 w-full h-full border-[3px] border-black/20 rounded-2xl -z-10" />
        </button>
      </div>

   
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-brand-green rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-orange rounded-full blur-[120px]" />
      </div>

     
    </div>
  );
}