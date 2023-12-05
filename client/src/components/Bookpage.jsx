import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";

const Bookpage = () => {
  const [book, setBook] = useState([]);
  const [title , setTitle] = useState('');


  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Book";
    };
  }, [title]);


  const { bookID } = useParams();
  useEffect(() => {
    const fecthBook = async () => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?albumId=1&id=${bookID}`
        )
        .then((res) => {
          setBook(res.data);
          // console.log(res.data);
        });
    };
    fecthBook();
  }, [bookID]);

  console.log(book);

  const ShowBook = () => {
    return (
      <>
        {book?.map((item) => {
          setTitle(item.title);
          return (
            <div key={item.id}>
              <img src={item.url} alt="" />
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
    <Layout>
      <h1>{bookID}</h1>
      <ShowBook/>
      </Layout>
    </>
  );
};

export default Bookpage;
