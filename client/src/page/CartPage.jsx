import { useState, useEffect, useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";
import { BsBookmark } from "react-icons/bs";

const CartPage = () => {
  const { userInfo } = useContext(DataContext);
  const [data, setData] = useState([]);
  const [bookIDs, setBookIDs] = useState([]);

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

  const showData = data?.map((item) => {
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
  });

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    data?.forEach((item) => {
      item.bookInfo.forEach((book) => {
        totalPrice += parseInt(book.price);
      });
    });
    return totalPrice;
  };

  
let bookid = []
data?.map((item)=>bookid.push(item.bookID))

  const checkout =  async () => {
    const data = {
      userID: userInfo.id,
      bookID : bookid,
      totalAmout : calculateTotalPrice()
    };
    await axiosInstance.post("/api/checkout",data).then(()=>{
      
    })
    console.log(data);
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
