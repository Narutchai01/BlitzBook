import SideBarAdmin from "./components/SideBarAdmin";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

const AdminPage = () => {
  const [image , setImage] = useState(null)
  const [file, setFile] = useState(null);
  const [dataBook, setDataBook] = useState({
    nameBook: "",
    price: 0,
    author: "",
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
    formData.append("description", dataBook.description);
    formData.append("file", file);
    formData.append("file", image);
    
    axiosInstance
      .post("/api/postbook", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBarAdmin />
        <div className="bg-blue-600 w-screen">
          <form>
            <div>
              <input
                type="text"
                name="nameBook"
                onChange={handleChange}
                placeholder="nameBook"
              />
            </div>
            <div>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                placeholder="price"
              />
            </div>
            <div>
              <input
                type="text"
                name="author"
                onChange={handleChange}
                placeholder="author"
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                placeholder="category"
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                placeholder="description"
              />
            </div>
            <div>
              <input type="file" name="file" onChange={handleFile} />
              <input type="file" name="image" onChange={handleFile} />
            </div>
            <button onClick={handleSubmit}>submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage;

