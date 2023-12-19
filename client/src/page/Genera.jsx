import { Link } from "react-router-dom";

const Genera = () => {
  return (
    <>
      <div className="bg-hero-pattern w-full h-80 flex justify-center items-center">
        <div className="OverLay">
          <h1 className="text-6xl font-black text-white font-HomeHeader">
            GENRE
          </h1>
        </div>
      </div>
      <div className="flex justify-center border-black border-b-2 py-16 bg-bgcolor">
        <div className="grid md:grid-cols-3 gap-10 w-full container">
          <Link to="/ShoppingPage/Action-Adventure">

            <div className="link-highlight md:w-[425.33px] h-[208px] bg-Action-Adventure bg-cover border-4 border-black flex justify-center items-center text-white max-w-[390px] w-full">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase font-HomeHeader">
                  Action-Adventure
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Crime">

            <div className="link-highlight md:w-[425.33px] h-[208px] bg-crime bg-cover border-4 border-black flex justify-center items-center text-white max-w-[390px] w-full">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase font-HomeHeader">
                  Crime
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Fantasy">

            <div className="link-highlight md:w-[425.33px] h-[208px] bg-Fantasy bg-cover border-4 border-black flex justify-center items-center text-white max-w-[390px] w-full">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase font-HomeHeader">
                  Fantasy
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Horror">

            <div className="link-highlight md:w-[425.33px] h-[208px] bg-Horror bg-cover border-4 border-black flex justify-center items-center text-white max-w-[390px] w-full">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase font-HomeHeader">
                  Horror
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Science-Fiction">

            <div className="link-highlight md:w-[425.33px] h-[208px] bg-ScienceFiction bg-cover border-4 border-black flex justify-center items-center text-white max-w-[390px] w-full">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase font-HomeHeader">
                  Science-Fiction
                </h1>
              </div>
            </div>
          </Link>
          <Link to="/ShoppingPage/Superhero">

            <div className="link-highlight md:w-[425.33px] h-[208px] bg-Superhero bg-cover border-4 border-black flex justify-center items-center text-white max-w-[390px] w-full">
              <div className="OverLay">
                <h1 className="text-3xl text-center uppercase font-HomeHeader">
                  Superhero
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Genera;
