/* eslint-disable react/prop-types */
import { MdAddShoppingCart } from "react-icons/md";
import { axiosInstance } from "../lib/axios";
import { useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

const Carditem = ({ data }) => {
  const Navigate = useNavigate();

  const { userInfo } = useContext(DataContext);

  const addtocart = (bookID) => {
    try {
      axiosInstance.post(
        `/api/addToCart?userID=${userInfo.id}&bookID=${bookID}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {data?.map((item) => {
        return (
          <div
              key={item._id}
            className="card-item"
            onClick={(e) => {
              e.stopPropagation();
              window.scrollTo(0, 0);
              Navigate(`/book/${item._id}`);
            }}
          >
            <div className="">
              <img src={item.image} alt="" className="aspect-[2/3] object-cover" />
            </div>
            <div className="flex flex-col gap-[16px] p-[12px] justify-between">
              <h1 className="line-clamp-[2]">{item.title}</h1>
              <div className="w-full flex justify-between text-lg font-medium">
                <p>{item.price} THB</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addtocart(item._id);
                  }}
                >
                  <h1 className="rounded-full hover:bg-secondary p-2">
                    <MdAddShoppingCart />
                  </h1>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Carditem;
