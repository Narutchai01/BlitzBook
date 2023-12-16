// import Layout from "../components/Layout";
import Carditem from "../components/Carditem";
import { useState, useEffect } from "react";
import {axiosInstance} from "../lib/axios";


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
              <Carditem data={dataBestSaler?.slice(0,5)}/>
            </div>
          </div>

          {/* new release */}
          <div className="">
            <h1 className="text-3xl">New release</h1>
            <div className="grid grid-cols-5 gap-10">
              <Carditem data={data?.slice(0,5)}/>
            </div>
          </div>
        </div>
        <div className="my-10 bg-hero-pattern2 bg-cover bg-no-repeat h-[400px]"></div>
        <div className="my-10 container mx-auto px-10">
          <div className="">
            <h1 className="text-3xl">Flase Sale release</h1>
            <div className="grid grid-cols-5 gap-10">
              {/* <Carditem data={data?.slice(0,5)}/> */}
            </div>
          </div>
        </div>
    </>
  );
};

export default LanddingPage;
