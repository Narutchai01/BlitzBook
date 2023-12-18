// import Layout from "../components/Layout";
import Carditem from "../components/Carditem";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";

const LanddingPage = () => {
  const [data, setData] = useState([]);
  const [dataBestSaler, setDataBestSaler] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/api/getNewReleases");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchDataBestSaler = async () => {
      try {
        axiosInstance.get("/api/getBestSaler").then((res) => {
          console.log(res);
          setDataBestSaler(res.data.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataBestSaler();
    fetchData();
  }, []);

  return (
    <>
      {/* header */}
      <div className="bg-hero-pattern bg-fixed h-[640px] bg-cover bg-center bg-no-repeat">
        <div className="OverLay">
          <h1 className="md:text-5xl font-HomeHeader text-bold text-white text-lg">
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
      {/* best sale */}

      {/* new release */}
      <div className="bg-third md:h-[731px] h-auto">
        <div className="h-full flex flex-col justify-center container mx-auto font-semibold">
          <h1 className="text-3xl text-white md:justify-start flex justify-center">New release</h1>
          <div className="grid md:grid-cols-5 gap-10 justify-center">
            <Carditem data={data?.slice(0, 5)} />
          </div>
        </div>
      </div>

      <div className="my-10 bg-hero-pattern2 bg-cover bg-no-repeat h-[400px]"></div>

      <div className="md:h-[731px] h-auto bg-bgcolor">
        <div className="h-full flex flex-col justify-center container mx-auto font-semibold">
          <h1 className="text-3xl text-black md:justify-start flex justify-center">Best Saler</h1>
          <div className="grid md:grid-cols-5 gap-10 justify-center">
            <Carditem data={dataBestSaler?.slice(0, 5)} />
          </div>

        </div>
        <div className="w-full bg-black h-2"></div>
      </div>
    </>
  );
};

export default LanddingPage;
