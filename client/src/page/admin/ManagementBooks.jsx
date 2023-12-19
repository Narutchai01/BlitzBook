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

  <CardBook databook={databooks} />;

  return (
    <>
      <div className="grid grid-cols-[360px_1fr] min-h-screen h-auto">
        <SideBarAdmin />
        <div className="px-8 py-16">
          <h1 className="text-3xl font-bold">Management Books</h1>
          <div className="grid grid-cols-4 gap-8 mt-8">
            <CardBook databook={databooks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementBooks;
