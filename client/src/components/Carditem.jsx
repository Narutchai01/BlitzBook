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
              <img src={item.image} alt="" className="w-full" />
            </div>
            <div className="h-full">
              <h1 className="line-clamp-[2]">{item.title}</h1>
              <div className="w-full flex justify-between mb-5 text-lg font-medium px-1">
                <p>{item.price} THB</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addtocart(item._id);
                  }}
                >
                  <h1>
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
