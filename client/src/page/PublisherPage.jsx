const bmlogo = "../assets/images/boomicon.png";

const PublisherPage = () => {
  return (
    <>
      <div className="bg-hero-pattern w-full h-80 flex justify-center items-center">
        <div className="OverLay">
          <h1 className="text-6xl font-black text-white font-HomeHeader">
            PUBLISHERS
          </h1>
        </div>
      </div>
      <div className="flex justify-center border-black border-b-2 py-10">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-BOOMStudios w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">BOOM! Studios</h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
          <div className="bg-DarkHorseComics w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">
                Dark Horse Comics
              </h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
          <div className="bg-dc w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">DC Comics</h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
          <div className="bg-Dynamite w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">Dynamite</h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
          <div className="bg-IDW w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">IDW Publishing</h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
          <div className="bg-ImageComics w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">Image Comics</h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
          <div className="bg-Marvel w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
            <div className="OverLay">
              <h1 className="text-3xl text-center uppercase">Marvel Comics</h1>
              <img src={bmlogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublisherPage;
