import SideBarAdmin from "./components/SideBarAdmin";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import CardWritter from "./components/CardWritter";

const ManageMentAuthor = () => {
  const [dataAuthor, setDataAuthor] = useState({
    name: "",
  });
  const [dataPublisher, setDataPublisher] = useState({
    name: "",
  });
  const [dataCategory, setDataCategory] = useState({
    name: "",
  });
  const [dataSeries, setDataSeries] = useState({
    name: "",
  });
  const [Author, setAuthor] = useState([]);
  const [Publisher, setPublisher] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Series, setSeries] = useState([]);

  const handleChangeAuthor = (e) => {
    setDataAuthor({
      ...dataAuthor,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangePublisher = (e) => {
    setDataPublisher({
      ...dataPublisher,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeCategory = (e) => {
    setDataCategory({
      ...dataCategory,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSeries = (e) => {
    setDataSeries({
      ...dataSeries,
      [e.target.name]: e.target.value,
    });
  };

  const addAuthor = async () => {
    axiosInstance.post("/api/addAuthor", dataAuthor).then((res) => {
      console.log(res.data);
    });
  };
  const addPublisher = async () => {
    axiosInstance.post("/api/addPublisher", dataPublisher).then((res) => {
      console.log(res.data);
    });
  };

  const addCategory = async () => {
    axiosInstance.post("/api/addCatagory", dataCategory).then((res) => {
      console.log(res.data);
    });
  };
  const addSeries = async () => {
    axiosInstance.post("/api/addSeries", dataSeries).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    const getAuthor = async () => {
      const res = await axiosInstance.get("/api/getWriterBy/Author");
      setAuthor(res.data.result);
    };
    const getPublisher = async () => {
      const res = await axiosInstance.get("/api/getWriterBy/Publisher");
      setPublisher(res.data.result);
    };
    const getCategory = async () => {
      const res = await axiosInstance.get("/api/getWriterBy/Category");
      setCategory(res.data.result);
    };
    const getSeries = async () => {
      const res = await axiosInstance.get("/api/getWriterBy/Series");
      setSeries(res.data.result);
    };
    getAuthor();
    getPublisher();
    getCategory();
    getSeries();
  }, []);


  return (
    <>
      <div className="grid grid-cols-[360px_1fr]">
        <SideBarAdmin />
        <div className="">
          <h1 className=" font-bold text-4xl my-10">Management Writter</h1>
          <div className="h-full flex flex-col gap-10 p-10">
            <div className="flex justify-center">
              <form onSubmit={addAuthor}>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name Author
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    onChange={handleChangeAuthor}
                  />
                </div>
                <button type="submit">add Author</button>
              </form>
              <form onSubmit={addPublisher}>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name Publisher
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    onChange={handleChangePublisher}
                  />
                </div>
                <button type="submit">add Publisher</button>
              </form>
              <form onSubmit={addCategory}>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    addd Category
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    onChange={handleChangeCategory}
                  />
                </div>
                <button type="submit">add Category</button>
              </form>
              {/* <form onSubmit={addSeries}>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    addd Series
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="name"
                    onChange={handleChangeSeries}
                  />
                </div>
                <button type="submit">add Series</button>
              </form> */}
            </div>
            <div>
              <div className="">
                <div>
                  <h1>Author</h1>
                </div>
                <div className="grid grid-cols-5 gap-5 w-full">
                  <CardWritter data={Author} type={"Author"} />
                </div>
              </div>
              <div>
                <h1>Publisher</h1>
                <div className="grid grid-cols-5 gap-5 w-full">
                  <CardWritter data={Publisher} type={"Publisher"} />
                </div>
              </div>
              <div>
                <h1>Category</h1>
                <div className="grid grid-cols-5 gap-5 w-full">
                  <CardWritter data={Category} type={"Category"} />
                </div>
              </div>
              {/* <div>
                <h1>Series</h1>
                <div className="grid grid-cols-5 gap-5 w-full">
                  <CardWritter data={Series} type={"Series"} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageMentAuthor;
