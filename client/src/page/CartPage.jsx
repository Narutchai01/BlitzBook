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
          `/api/getBookinCart?userID=${userInfo.id}`
        );
        setData(res.data.matching);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthData();
  }, [userInfo]);

  console.log(data);

  const showData = () => {
    if (data) {
      return data.map((item) => {
        return item.bookInfo?.map((book) => {
          return (
            <div key={book._id} className="card-item">
              <img src={book.image} alt="" />
              <h1>{book.name}</h1>
              <h1>{book.price}</h1>
              <button onClick={
                () => 
                axiosInstance.delete(`/api/deleteBookinCart?id=${item._id}`)
              }>remove</button>
            </div>
          );
        });
      });
    }
  };

  return (
    <>
      <h1>CART PAGE</h1>
      {showData()}
    </>
  );
};

export default CartPage;
