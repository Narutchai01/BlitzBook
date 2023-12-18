import SildeBarUser from "../components/SildeBarUser";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";
import CardCollection from "../components/CardCollection";

const BooksCollection = () => {
  const { userInfo } = useContext(DataContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        await axiosInstance
          .get(`/api/getCollection?userID=${userInfo.id}`)
          .then((res) => {
            setBooks(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, [userInfo.id]);

  console.log(books);

  return (
    <>
      <div className="grid md:grid-cols-[360px_1fr] min-h-screen border-b-2 border-black bg-bgcolor">
        <SildeBarUser />
        <div className="container mx-auto px-16 py-2 mb-10">
          <h1 className="text-2xl font-semibold my-10">My Books Collection</h1>
          <div className="grid md:grid-cols-4 w-full gap-y-10">
            <CardCollection data={books} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCollection;
