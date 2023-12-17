import SideBarAdmin from "./components/SideBarAdmin";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../lib/axios";
import CardBook from "./components/CardBook";

const ManagementBooks = () => {
  const [databooks, setDatabooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      axiosInstance
        .get("/api/getallbooks")
        .then((res) => {
          setDatabooks(res.data);
        })
        .catch((err) => console.log(err));
    };
    getBooks();
  }, []);

  return (
    <>
      <div className="flex w-screen h-auto min-h-screen">
        <SideBarAdmin />
        <div className="w-screen">
          <h1 className=" font-bold text-4xl my-10">
            Management Books
          </h1>
          <div className="h-full grid grid-cols-5  gap-y-10 container">
            <CardBook databook={databooks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementBooks;
