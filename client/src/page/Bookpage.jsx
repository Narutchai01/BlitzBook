import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import { DataContext } from "../App";

const Bookpage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const { userInfo } = useContext(DataContext);

  useEffect(() => {
    try {
      const fetchData = async () => {
        axiosInstance.get(`/api/getBookByID/${id}`).then((res) => {
          setData(res.data);
        });
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [data, id]);

  const authorName = data.authorObj?.map((item) => item.name);
  const publisherName = data.publisherInfo?.map((item) => item.name);

  const addtocart = () => {
    try {
      axiosInstance.post(`/api/addToCart?userID=${userInfo.id}&bookID=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  const date = new Date(data.date).toDateString();

  console.log(date);

  return (
    <>
      <div className="mx-auto px-20 border-b-4 border-black">
        <div className="flex w-full my-8 gap-10">
          <div className="w-[360px] max-w-full h-[608px]">
            <div className="w-full">
              <img src={data.image} alt="" className="w-[296px] h-[444px]" />
            </div>
          </div>
          <div className="w-full">
            <p className="text-2xl font-bold">{data.title}</p>
            <div className="flex flex-col gap-2 my-10 text-xl font-semibold">
              <h1>Written: {authorName}</h1>
              <h1>Publisher: {publisherName}</h1>
              <h1>On Sale Date: {date}</h1>
            </div>
            <h1 className="font-bold text-2xl mb-10">{data.price} THB</h1>
            <button
              className="bg-primary font-bold text-white border-4 border-black p-1"
              onClick={addtocart}
            >
              ADD TO CART
            </button>
            <div className="my-32">
              <div className="h-1 bg-black"></div>
              <p className="text-lg font-medium mt-10">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookpage;
