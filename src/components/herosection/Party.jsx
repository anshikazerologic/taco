import React from 'react';


const PartySection = () => {
  return (
    <section className="bg-brand-cream w-full overflow-hidden">
      <div className="flex flex-col md:flex-row-reverse">
     
        <div 
          className="w-full md:w-1/2 bg-brand-orange p-10  lg:p-15 flex flex-col justify-center items-start md:items-start text-left"
         
        >
          <div
           
            className="w-full "
          >
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl  xl:text-9xl houseofcards_bold text-brand-cream leading-[0.9] mb-5 tracking-tighter uppercase ">
              PARTY LIKE <br /> A PRO!
            </h2>
            
            <div className="space-y-4 mb-5 max-w-55 md:max-w-65">
              <p className="text-brand-cream robotolab_regular text-xl md:text-2xl  tracking-wider leading-relaxed opacity-90">
                Got a fiesta coming up?We'll handle the 
                 <span className="text-brand-cream relative robotolab_bold inline-block">
                  CATERING!!
                </span>
              </p>
            
               
            
            </div>

            <button
              
              className="bg-brand-cream text-brand-orange font-display houseofcards_bold text-2xl md:text-3xl px-12  py-4 rounded-full border-2 border-black shadow-[1px_4px_0px_black]  uppercase active:translate-x-1 "
            >
              Explore
            </button>
          </div>
        </div>

        <div 
          className="w-full md:w-1/2 h-125 md:h-auto overflow-hidden relative"
          id="party-image"
        >
          <img
            src="/assets/partysectionimg.jpg"
            alt="Delicious catering trays spread"
            className="w-full h-full object-cover  hover:scale-110"
            referrerPolicy="no-referrer"
          />
        
        
        </div>
      </div>
    </section>
  );
};

export default PartySection;
