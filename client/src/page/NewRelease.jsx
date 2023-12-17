import Carditem from "../components/Carditem";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import {useParams} from "react-router-dom"

const NewRelease = () => {


  const {filter} = useParams();
  const [book, setBook] = useState([]);
  const [Publisher, setPublisher] = useState([]);
  const [Category, setCategory] = useState([]);
  const [filterArr, setFilterArr] = useState([]);

  useEffect(() => {
    axiosInstance.get("/api/getNewReleases").then((res) => {
      setBook(res.data);
    });
    axiosInstance.get("/api/getWriterBy/Publisher").then((res) => {
      setPublisher(res.data.result);
    });
    axiosInstance.get("/api/getWriterBy/Category").then((res) => {
      setCategory(res.data.result);
    });
  }, []);


const [isPushed, setIsPushed] = useState(false);

useEffect(() => {
  if (!isPushed) {
    if (filter === "newrelease" || filter === "bestsaler") {
      Publisher.map((item) => {
        filterArr.push(item.name);
      });
    } else if (
      Publisher.map((item)=>{
        filter === item.name
      }) ||
      Category.map((item)=>{
        filter === item.name
      })
    ) {
      filterArr.push(filter);
    }
    // setIsPushed(true);
  }
}, [Publisher, filter, filterArr, isPushed ,Category]);



  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setFilterArr([...filterArr, e.target.value]); // Add the checked value to the state
    } else {
      setFilterArr(filterArr.filter((item) => item !== e.target.value)); // Remove the unchecked value from the state
    }
    console.log(filterArr);
  };

  const filteredBooks = book.filter((item) => {
    return (
      filterArr.includes(item.publisher) || filterArr.includes(item.category)
    );
  });

  const checkBoxPublisher = Publisher.map((item, index) => {
    return (
      <div className="flex items-center" key={index}>
        <input
          type="checkbox"
          name="publisher"
          value={item.name}
          className="mr-2"
          onChange={handleCheckBox}
        />
        <label>{item.name}</label>
      </div>
    );
  });

  const checkBoxCategory = Category.map((item, index) => {
    return (
      <div className="flex items-center" key={index}>
        <input
          type="checkbox"
          name="category"
          value={item.name}
          className="mr-2"
          onChange={handleCheckBox}
        />
        <label>{item.name}</label>
      </div>
    );
  });


  console.log(filterArr);

  return (
    <>
      <div className="bg-hero-pattern w-full h-[360px]">
        <div className="OverLay">
          <h1 className="text-5xl font-HomeHeader text-bold text-white ">
            COMICS
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-[360px_1fr] border-b-2 border-black h-auto my-10">
        <div className="h-full">
          <div className="h-[423px] bg-yellow w-[288px] border-black border-4">
            <div>
              <h1 className="text-3xl text-center font-bold text-black my-5">
                Publisher
              </h1>
              {checkBoxPublisher}
            </div>
            <h1>Category</h1>
            {checkBoxCategory}
          </div>
        </div>
        <div className="">
          <Carditem data={filteredBooks} />
        </div>
      </div>
    </>
  );
};

export default NewRelease;
