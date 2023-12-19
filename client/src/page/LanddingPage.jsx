// import Layout from "../components/Layout";
import Carditem from "../components/Carditem";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import { Link } from "react-router-dom";

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
      <div className="bg-hero-pattern bg-fixed h-[480px] bg-cover bg-center bg-no-repeat">
        <div className="OverLay">
          <h1 className="md:leading-loose md:text-4xl font-HomeHeader text-bold text-white text-lg uppercase text-center mx-[32px]">
            We have all comic from all of your favorite publishers in a form of e-book
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
      <div className="bg-third pt-[64px] pb-[128px] h-auto">
        <div className="h-full flex flex-col justify-center container mx-auto font-semibold gap-8 relative">
          <div className=" absolute top-[-96px] flex w-full justify-between items-end">
            <h1 className="tracking-wider font-HomeHeader text-xl text-black md:justify-start flex justify-center items-center px-[32px] py-[12px] bg-white border-4 border-third">
              NEW RELEASE
            </h1>
            <h1 className="tracking-wider font-HomeHeader text-[14px] text-black flex md:justify-start justify-center items-center px-[32px] py-[12px] bg-yellow border-4 border-third">
              <Link to="/ShoppingPage/newrelease">SEE ALL</Link>
            </h1>
          </div>
          <div className="grid md:grid-cols-5 gap-10 justify-center">
            <Carditem data={data?.slice(0, 5)} />
          </div>
        </div>
      </div>
    
      {/* <div className="my-10 bg-hero-pattern2 bg-cover bg-no-repeat h-[400px]"></div> */}

      <div className="pt-[64px] pb-[128px] bg-bgcolor">
        <div className="h-full flex flex-col justify-center container mx-auto font-semibold items-start gap-8 relative">
        <div className=" absolute top-[-96px] flex w-full justify-between items-end">
            <h1 className="tracking-wider font-HomeHeader text-xl text-white md:justify-start flex justify-center items-center px-[32px] py-[12px] bg-[#C63535] border-4 border-bgcolor">
              BEST SELLER
            </h1>
            <h1 className="tracking-wider font-HomeHeader text-[14px] text-black flex md:justify-start justify-center items-center px-[32px] py-[12px] bg-yellow border-4 border-bgcolor">
              <Link to="/ShoppingPage/bestsaler">SEE ALL</Link>
            </h1>
          </div>
          <div className="grid md:grid-cols-5 gap-20 justify-center">
            <Carditem data={dataBestSaler?.slice(0, 5)} />
          </div>

        </div>
      </div>
    </>
  );
};

export default LanddingPage;
