import React from 'react';


const FollowSection = () => {
  const images = [
    { 
      src: '/assets/followussectionfirst.jpg', 
      alt: 'Delicious taco spread' 
    },
    { 
      src: '/assets/followussectionsecond.jpg', 
      alt: 'Close up of a fresh taco' 
    },
    { 
      src: '/assets/followussectionthird.jpg', 
      alt: 'Taco platter with sides' 
    },
  ];

  return (
    <section  className="bg-brand-cream py-16 px-6 md:py-10">
      <div className=" ">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl  houseofcards_bold text-brand-green text-center mb-16   tracking-tighter uppercase ">
          FOLLOW US @TACOPROSOFFICIAL
        </h2>
        
        <div className="grid grid-cols-1  md:grid-cols-3 gap-8 md:gap-15 ">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="aspect-2/3 md:aspect-4/6 lg:aspect-4/5  overflow-hidden  "
            
            >
              <img
                src={`${img.src}`}
                alt={img.alt}
                className="w-full h-full object-cover "
                referrerPolicy="no-referrer"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowSection;
