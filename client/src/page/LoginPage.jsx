// import Layout from "../components/Layout";
import { axiosInstance } from "../lib/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
      axiosInstance
        .post("/api/login", user)
        .then((res) => {
          console.log(res.data.result.role);
          if (res.data.result.role === "admin") {
            navigate("/admin/dashboard");
            window.location.reload();
          } else {
            navigate("/");
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Layout> */}
      <div className="grid grid-cols-2 h-[640px] w-full border-b-4 border-black">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-6xl text-primary font-bold">Welcome Back</h1>
          <div className="shape-login-from">
            <form className="h-full w-full items-center flex border-[6px] border-black  bg-white justify-center flex-col p-10 gap-5">
              <h1 className="flex font-semibold gap-2 text-xl w-full">
                <p className="text-primary">Login</p>to your account here
              </h1>
              <div className="from-login text-xl">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-10 border-2 border-black"
                  onChange={handleChange}
                />
              </div>
              <div className="from-login text-xl">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full h-10 border-2 border-black"
                  onChange={handleChange}
                />
                <div>
                  <input type="checkbox" />
                  <label htmlFor="remember">Remember me</label>
                </div>
              </div>

              <div className="w-full text-lg font-bold border-4 border-black">
                <button
                  className="bg-primary text-secondary w-full h-10"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="overlay bg-hero-pattern bg-left-top bg-cover">
          <div className="overlay">
            <div className="flex flex-col justify-center items-center text-white h-full gap-10">
                <h1 className="text-5xl font-bold">New Here ?</h1>
                <h1 className="text-sm">Start your journey of reading ebook comics with us.</h1>
                <Link to="/signup" className="text-sm py-3 px-5 bg-white text-primary border-black border-4 font-semibold">CREATE NEW ACCOUNT</Link>
            </div>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default LoginPage;
