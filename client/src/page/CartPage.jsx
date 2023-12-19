import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";
import CardCart from "../components/CardCart";
import Swal from "sweetalert2";

const CartPage = () => {
  const { userInfo } = useContext(DataContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosInstance.get(
        `/api/getBookinCart?userID=${userInfo.id}`
      );
      setData(res.data.matching);
    };
    fetchData();
  }, [userInfo.id]);

  const renderData = data.map((item) => item);

  const calculateTotalPrice = () => {
    let total = 0;
    data.forEach((item) => {
      total += parseInt(item.bookPrice);
    });
    return total;
  };

  let bookID = [];

  data.forEach((item) => {
    bookID.push(item.bookID);
  });


  const handleDeleteCheckout = async (userID) => {
    try {
      await axiosInstance.delete(
        `/api/deleteBookinCartForCheckout?id=${userID}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const checkout = async () => {
    const data = {
      userID: userInfo.id,
      bookID: bookID,
      totalAmout: calculateTotalPrice(),
    };
    await axiosInstance.post("/api/checkout", data).then( async () => {
      await Swal.fire({
  imageUrl: "https://media.discordapp.net/attachments/1069897185812041760/1186076270925193316/004999030098155_20231218_054306.jpg?ex=6591ee9b&is=657f799b&hm=43e6354eb3c5353142eaffb0a6210a5d1be941bb654c05e5a9beb82aebb9aff6&=&format=webp&width=460&height=671",
  imageHeight: 500,
  imageWidth :300,
  imageAlt: "A tall image"
});
      handleDeleteCheckout(userInfo.id);
      window.location.reload();
    });
  };



  return (
    <>
      <div className="md:min-h-[508px] h-auto">
        <div className="grid md:grid-cols-[3fr_1fr] h-auto mx-auto px-11 container">
          <div className=" my-8 flex flex-col gap-12 justify-center">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <div className="flex flex-col gap-8 ">
              <CardCart dataCart={renderData} />
            </div>
          </div>
          <div className="min-h-full">
            <div className="md:fixed bg-third md:w-[296px] h-[244px] px-4 py-8 grid text-white border-4 border-black font-semibold my-10">
              <h1 className="text-lg">Total {data.length} items</h1>
              <div className="h-[3px] bg-white"></div>
              <div className="flex justify-between text-2xl">
                <h1>Total</h1>
                <h1>{calculateTotalPrice()}THB</h1>
              </div>
              <button
                className="bg-[#F8B32E] border-2 border-white text-primary text-xl"
                onClick={checkout}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
