import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";

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

  const handleDelete = async (bookID) => {
    try {
      await axiosInstance
        .delete(`/api/deleteBookInCart?id=${bookID}`)
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCheckout = async (userID) => {
    try {
      await axiosInstance.delete(`/api/deleteBookinCartForCheckout?id=${userID}`)
    } catch (error) {
      console.log(error);
    }
  }

  const renderData = (item) => {
    return item.bookInfo.map((book) => {
      return (
        <div key={book._id} className="card-item">
          <img src={book.image} alt={book.title} />
          <p>{book.title}</p>
          <p>{book.price}</p>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      );
    });
  };

  const showData = data?.map(renderData);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    data?.forEach((item) => {
      item.bookInfo.forEach((book) => {
        totalPrice += parseInt(book.price);
      });
    });
    return totalPrice;
  };

  let bookid = [];
  data?.map((item) => bookid.push(item.bookID));

  const checkout = async () => {
    const data = {
      userID: userInfo.id,
      bookID: bookid,
      totalAmout: calculateTotalPrice(),
    };
    await axiosInstance.post("/api/checkout", data).then(() => {
      handleDeleteCheckout(userInfo.id)
      window.location.reload();
    });
    
  };




  return (
    <>
      <h1>CART PAGE</h1>
      {showData}
      {calculateTotalPrice()}
      <button onClick={checkout}>Checkout</button>
    </>
  );
};

export default CartPage;
