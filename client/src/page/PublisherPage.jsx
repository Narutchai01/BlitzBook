import { Link } from "react-router-dom";

const PublisherPage = () => {
  return (
    <>
      <div className="bg-hero-pattern w-full h-80 flex justify-center items-center">
        <div className="OverLay">
          <h1 className="md:text-6xl font-black text-white font-HomeHeader text-3xl">
            PUBLISHERS
          </h1>
        </div>
      </div>
      <div className="flex justify-center border-black border-b-2 py-10">
        <div className="grid md:grid-cols-2 gap-3 ">
          <Link to="ShoppingPage/BOOM!-Studios">
            <div className="bg-BOOMStudios md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">
                  BOOM! Studios
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Dark-Horse-Comics">
            <div className="bg-DarkHorseComics md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">
                  Dark Horse Comics
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/DC-Comics">
            <div className="bg-dc md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">DC Comics</h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Dynamite">
            <div className="bg-Dynamite md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">Dynamite</h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppinPage/IDW-Publishing">
            <div className="bg-IDW md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">
                  IDW Publishing
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Image-Comics">
            <div className="bg-ImageComics md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">Image Comics</h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Marvel-Comics">
            <div className="bg-Marvel md:w-[647px] h-[323.5px] bg-no-repeat bg-cover bg-center flex justify-center items-center font-HomeHeader text-white border-2 border-black">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase">
                  Marvel Comics
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PublisherPage;
