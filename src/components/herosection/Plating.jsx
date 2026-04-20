
const Plating = () => {
  return (
    <section
      className="relative w-full h-80 md:min-h-screen bg-brand-cream overflow-hidden flex flex-col justify-end">
      <div
        className="relative w-full  overflow-hidden">
        <img
          src="/assets/platingsectiongreenfloor.png"
          alt="Green tiled floor"
          className="w-full h-full object-cover "
     
        />
      </div>
      <div className="absolute bottom-1 md:bottom-[8vh] left-[2%] w-[50%] md:w-[40%] lg:w-[30%]  z-10">
        <div>
          <img
            src="/assets/platingsectionimg.png"
            alt="Gourmet Quesadillas on a Black Plate"
            className="w-full h-auto"
          />
        </div>
      </div>



    </section>
  );
};

export default Plating;
