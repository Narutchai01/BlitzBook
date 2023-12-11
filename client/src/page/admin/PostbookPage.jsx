import SideBarAdmin from "./components/SideBarAdmin";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../lib/axios";
import Swal from "sweetalert2";

const PostbookPage = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [dataAuthor, setDataAuthor] = useState([]);
  const [dataPublisher, setDataPublisher] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataBook, setDataBook] = useState({
    nameBook: "",
    price: 0,
    author: "",
    publisher: "",
    category: "",
    description: "",
  });

  const handleFile = (e) => {
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
    }
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setDataBook({
      ...dataBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", dataBook.nameBook);
    formData.append("price", dataBook.price);
    formData.append("author", dataBook.author);
    formData.append("category", dataBook.category);
    formData.append("publisher", dataBook.publisher);
    formData.append("description", dataBook.description);
    formData.append("file", file);
    formData.append("file", image);

    axiosInstance
      .post("/api/postbook", formData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your book has been posted",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getPublisher = async () => {
      try {
        await axiosInstance.get("/api/getWriterBy/Publisher").then((res) => {
          setDataPublisher(res.data.result);
        });
      } catch (error) {
        console.log(error);
      }
    };
    const getAuthor = async () => {
      try {
        await axiosInstance.get("/api/getWriterBy/Author").then((res) => {
          setDataAuthor(res.data.result);
        });
      } catch (error) {
        console.log(error);
      }
    };
    const getCategory = async () => {
      try {
        await axiosInstance.get("/api/getWriterBy/Catagory").then((res) => {
          setDataCategory(res.data.result);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
    getAuthor();
    getPublisher();
  }, []);

  console.log(dataPublisher);

  const selectPublisher = dataPublisher.map((item) => {
    return (
      <option value={item._id} key={item._id}>
        {item.name}
      </option>
    );
  });

  const selectAuthor = dataAuthor.map((item) => {
    return (
      <option value={item._id} key={item._id}>
        {item.name}
      </option>
    );
  });

  const selectCategory = dataCategory.map((item) => {
    return (
      <option value={item._id} key={item._id}>
        {item.name}
      </option>
    );
  });

  return (
    <>
      <div className="flex w-screen h-auto">
        <SideBarAdmin />
        <div className="w-screen flex justify-center items-center">
          <form className="flex gap-10 flex-col">
            <div className="form-input-book">
              <label>Title Book</label>
              <input
                type="text"
                name="nameBook"
                onChange={handleChange}
                placeholder="nameBook"
              />
            </div>
            <div className="form-input-book">
              <label>Title Book</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                placeholder="price"
              />
            </div>
            <div className="form-input-book">
              <label>Author</label>
              <select name="author" onChange={handleChange}>
                <option value="">--Select Author--</option>
                {selectAuthor}
              </select>
            </div>
            <div className="form-input-book">
              <label>Publisher</label>
              <select name="publisher" onChange={handleChange}>
                <option value="">--Select Publisher--</option>
                {selectPublisher}
              </select>
            </div>
            <div className="form-input-book">
              <label>Category</label>
              <select name="category" onChange={handleChange}>
                <option value="">--Select Category--</option>
                {selectCategory}
              </select>
            </div>
            <div className="form-input-book">
              <label>Title Book</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="description"
              />
            </div>
            <div className="flex flex-col gap-7">
              <div className="form-input-book">
                <label>File</label>
                <input type="file" name="file" onChange={handleFile} />
              </div>
              <div className="form-input-book">
                <label>Image</label>
                <input type="file" name="image" onChange={handleFile} />
              </div>
            </div>
            <button
              className="py-5 mx-20 rounded-xl text-3xl bg-red-600"
              onClick={handleSubmit}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostbookPage;
