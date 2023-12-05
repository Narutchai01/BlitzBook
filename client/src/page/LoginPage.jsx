import Layout from "../components/Layout";
import { axiosInstance } from "../lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      axiosInstance.post("/api/login", user).then((res) => {
        console.log(res.data);
      navigate("/");
      }).catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password not match!",
      });
    }
  };

  return (
    <>
      <Layout>
        <div className="grid grid-cols-2 h-[556px]">
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-6xl font-extrabold">Login</h1>
            <form
              className="shadow-xl h-auto rounded-lg text-lg flex flex-col gap-10 p-10 w-[436px]"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <button className="bg-[#4A5468] rounded-lg p-3 my-4">
                Login
              </button>
            </form>
          </div>
          <div className="bg-blue-600">
            <h1>fasdasd</h1>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
