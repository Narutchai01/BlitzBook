import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";

const CartPage = () => {
  const { userInfo } = useContext(DataContext);

  const [data, setData] = useState();

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await axiosInstance.get(
          `http://localhost:8000/api/getBookinCart?userID=${userInfo.id}`
        );
        setData(res.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fecthData();
  }, [userInfo]);

  console.log(data);

  const showData = data?.map((item) => {
    return (
      <div key={item._id}>
        <h1>{item.title}</h1>
        <h1>{item.price}</h1>
      </div>
    );
  });

  return (
    <>
      <h1>CART PAGE</h1>
      {showData}
    </>
  );
};

export default CartPage;
