// import Layout from "../components/Layout";
import Carditem from "../components/Carditem";
import { useState, useEffect } from "react";
import axios from "axios";

const LanddingPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fecthData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com//photos?albumId=1")
        .then((res) => {
          setData(res.data);
        });
    };
    fecthData();
  }, []);


  console.log(data);

  return (
    <>
      {/* <Layout> */}
        {/* header */}
        <div className="bg-hero-pattern bg-fixed h-[640px] bg-cover bg-center bg-no-repeat">
          <div className="OverLay">
            <h1 className="text-6xl font-black text-white font-HomeHeader">
              GET YOUR FAVORITE COMICS
            </h1>
          </div>
        </div>
        {/*---------------------------------------*/}
        <div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        {/* body */}
        <div className="my-10 container mx-auto px-10">
          {/* best sale */}
          <div className="">
            <h1 className="text-3xl">Best saler</h1>
            <div className="grid grid-cols-5 gap-10">
              <Carditem data={data?.slice(0,5)}/>
            </div>
          </div>

          {/* new release */}
          <div className="">
            <h1 className="text-3xl">New release</h1>
            <div className="grid grid-cols-5 gap-10">
              {/* <Carditem data={data?.slice(0,5)}/> */}
            </div>
          </div>
        </div>
        <div className="my-10 bg-hero-pattern2 bg-cover bg-no-repeat h-[400px]"></div>
        <div className="my-10 container mx-auto px-10">
          <div className="">
            <h1 className="text-3xl">New release</h1>
            <div className="grid grid-cols-5 gap-10">
              {/* <Carditem data={data?.slice(0,5)}/> */}
            </div>
          </div>
        </div>
      {/* </Layout> */}
    </>
  );
};

export default LanddingPage;
