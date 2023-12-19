import Carditem from "../components/Carditem";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import { useParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const NewRelease = () => {
  const { filter } = useParams();
  const [book, setBook] = useState([]);
  const [Publisher, setPublisher] = useState([]);
  const [Category, setCategory] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [showPublisher, setShowPublisher] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

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
        Publisher.map((item) => {
          filter === item.name;
        }) ||
        Category.map((item) => {
          filter === item.name;
        })
      ) {
        filterArr.push(filter);
      }
      // setIsPushed(true);
    }
  }, [Publisher, filter, filterArr, isPushed, Category]);

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
      <div className="text-lg font-semibold gap-y-10 px-5" key={index}>
        <input
          type="checkbox"
          name="publisher"
          value={item.name}
          className="mr-2"
          onChange={handleCheckBox}
        />
        <label className="w-full">{item.name}</label>
      </div>
    );
  });

  const checkBoxCategory = Category.map((item, index) => {
    return (
      <div className="text-lg font-semibold gap-y-10 px-5" key={index}>
        <input
          type="checkbox"
          name="category"
          value={item.name}
          className="mr-2"
          onChange={handleCheckBox}
        />
        <label className="w-full">{item.name}</label>
      </div>
    );
  });

  return (
    <>
      <div className="bg-hero-pattern w-full h-[360px]">
        <div className="OverLay">
          <h1 className="text-5xl font-HomeHeader text-bold text-white ">
            COMICS
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-[360px_1fr] h-auto my-10 bg-bgcolor">
        <div className="h-full px-5">
          <div className="h-auto bg-yellow md:w-[288px] border-black border-4 sticky z-10 top-1 py-4 px-2">
            <div className="gap-x-10 ">
              <div className="flex h-full items-center gap-x-10">
                <h1 className="text-xl font-bold text-primary">Publisher</h1>
                <div
                  className="text-3xl"
                  onClick={() => setShowPublisher(!showPublisher)}
                >
                  {showPublisher ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
              <div>{showPublisher ? checkBoxPublisher : null}</div>
            </div>

            <div className="gap-x-10 ">
              <div className="flex h-full items-center gap-x-10">
                <h1 className="text-xl font-bold text-primary">Category</h1>
                <div
                  className="text-3xl"
                  onClick={() => setShowCategory(!showCategory)}
                >
                  {showCategory ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>
              </div>
              {showCategory ? checkBoxCategory : null}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-7 mb-10 justify-center">
          <Carditem data={filteredBooks} />
        </div>
      </div>
    </>
  );
};

export default NewRelease;
