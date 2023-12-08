import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import Layout from "./Layout";

const Bookpage = () => {
  const [book, setBook] = useState([]);
  const [title , setTitle] = useState('');
  const { bookID } = useParams();


  useEffect(() => {
    document.title = title;
    return () => {
      document.title = "Book";
    };
  }, [title]);


  useEffect(() => {
    
  }, [bookID]);




  return (
    <>
      
    </>
  );
};

export default Bookpage;
