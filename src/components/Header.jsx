

export default function Header() {
  return (
    <header className="w-full bg-brand-cream ">
      <div className="max-w-7xl mx-15 md:mx-4  md:py-2 grid grid-cols-3 items-center">
        
        <div className="hidden md:block" />

        
        <div className="col-span-3 md:col-span-1 flex justify-center">
          <img 
            src="/assets/tacologo.png" 
            alt="Taco Pros Logo"
            className=" h-40 md:h-20 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

       
        <div className="hidden md:flex justify-end">
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-black robotolab_bold bg-brand-cream text-brand-green font-bold text-lg px-8 py-2 rounded-full shadow-[1px_4px_0px_0px_#4B7E44] "
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </header>
  );
}
