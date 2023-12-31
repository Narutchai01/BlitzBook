import SildeBarUser from "../components/SildeBarUser";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";
import CardMyPurchase from "../components/CardMyPurchase";

const MyPurchasePage = () => {
  const { userInfo } = useContext(DataContext);
  const [purchase, setPurchase] = useState([]);

  useEffect(() => {
    const getPurchase = async () => {
      try {
        await axiosInstance
          .get(`/api/MyPurchase?userID=${userInfo.id}`)
          .then((res) => {
            setPurchase(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getPurchase();
  }, [userInfo.id]);

  console.log(purchase);

  return (
    <>
        <div className="grid md:grid-cols-[360px_1fr] min-h-screen border-b-2 border-black bg-bgcolor">
          <SildeBarUser />
          <div className="container md:mx-auto md:px-24 mb-10">
            <h1 className="text-3xl font-semibold my-10">My Purchase</h1>
            <div className="grid grid-cols-[1fr] gap-8">
              <CardMyPurchase purchase={purchase} />
            </div>
          </div>
        </div>
    </>
  );
};

export default MyPurchasePage;
