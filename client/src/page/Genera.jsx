const Genera = () => {
  return (
    <>
      <div className="bg-hero-pattern w-full h-80 flex justify-center items-center">
        <div className="OverLay">
          <h1 className="text-6xl font-black text-white font-HomeHeader">
            GENERA
          </h1>
        </div>
      </div>
      <div className="flex justify-center border-black border-b-2 py-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="w-[425.33px] h-[208px] bg-Action-Adventure bg-cover border-4 border-black flex justify-center items-center text-white">
            <h1 className="text-3xl text-center uppercase font-HomeHeader">
              BOOM! Studios
            </h1>
          </div>
          <div className="w-[425.33px] h-[208px] bg-crime bg-cover border-4 border-black flex justify-center items-center text-white">
            <h1 className="text-3xl text-center uppercase font-HomeHeader">
              Crime
            </h1>
          </div>
          <div className="w-[425.33px] h-[208px] bg-Fantasy bg-cover border-4 border-black flex justify-center items-center text-white">
            <h1 className="text-3xl text-center uppercase font-HomeHeader">
              Fantasy
            </h1>
          </div>
          <div className="w-[425.33px] h-[208px] bg-Horror bg-cover border-4 border-black flex justify-center items-center text-white">
            <h1 className="text-3xl text-center uppercase font-HomeHeader">
              Horror
            </h1>
          </div>
          <div className="w-[425.33px] h-[208px] bg-DarkHorseComics bg-cover border-4 border-black flex justify-center items-center text-white">
            <h1 className="text-3xl text-center uppercase font-HomeHeader">
              Science-Fiction
            </h1>
          </div>
          <div className="w-[425.33px] h-[208px] bg-Superhero bg-cover border-4 border-black flex justify-center items-center text-white">
            <h1 className="text-3xl text-center uppercase font-HomeHeader">
              Science-Fiction
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genera;
