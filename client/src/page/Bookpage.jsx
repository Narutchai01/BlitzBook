import { useEffect, useState ,useContext } from "react";
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

const addtocart = () => {
  try {
    axiosInstance.post(`/api/addToCart?userID=${userInfo.id}&bookID=${id}`).then((res) => {
      console.log(res.data);
    });
  } catch (error) {
    console.log(error);
  }
};


  return (
    <>
      <div className="w-screen my-10 flex justify-center items-center">
        <div className="flex shadow-2xl p-10">
          <div>
            <img src={data.image} alt="" className="w-[500px]" />
          </div>
          <div>
            <h1>{data.title}</h1>
            <h1>{authorName}</h1>
            <p>{data.description}</p>
          </div>
          <button onClick={addtocart}>add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Bookpage;
