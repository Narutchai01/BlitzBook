/* eslint-disable react/prop-types */
import { axiosInstance } from "../lib/axios";



const CardCart = ({ dataCart }) => {
  const ShowData = dataCart.map((item) => {
    return (
      <div
        key={item.bookID}
        className="flex border-2 gap-4 border-black h-[242px] py-2 px-8 w-[952px] font-semibold"
      >
        <div className="h-full w-[140px]">
          <img src={item.bookImage} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col my-2 gap-3 h-full w-full ">
          <h3 className="line-clamp-[2] text-xl ">{item.bookName}</h3>
          <p className="text-lg">
            Publisher <span className="text-primary">{item.publisherName}</span>
          </p>
          <p className="text-xl">{item.bookPrice} THB</p>
          <div className="text-end mt-5">
            <button className="h-full text-primary" onClick={()=> handleRemove(item._id)}>remove</button>
          </div>
        </div>
      </div>
    );
  });


  const handleRemove = async (CartID) => {
    await axiosInstance.delete(`/api/deleteBookinCart/?id=${CartID}`);
    window.location.reload();
  };
  return(
    <>
        {ShowData}
    </>
  );
};

export default CardCart;
