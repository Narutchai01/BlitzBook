import { axiosInstance } from "../lib/axios";
// import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    date: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await validate();
      if (user.password !== user.confirmpassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password not match!",
        });
        return false;
      } else if (user.password.length < 6) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password must be at least 6 characters!",
        });
        return false;
      } else if (user.username === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username cannot be empty!",
        });
        return false;
      } else if (user.email === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email cannot be empty!",
        });
        return false;
      } else if (user.password === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password cannot be empty!",
        });
        return false;
      } else if (user.confirmpassword === "") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Confirm Password cannot be empty!",
        });
        return false;
      }
      axiosInstance.post("/api/signup", user).then((res) => {
        console.log("success", res);
      });
      await navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <>
      {/* <Layout> */}
      <div className="grid md:grid-cols-2 h-[920px] border-b-4 border-black">
        <div className="overlay bg-hero-pattern bg-left-top bg-cover">
          <div className="overlay">
            <div className="flex flex-col w-full justify-center items-center text-white h-full gap-10">
              <h1 className="text-5xl font-bold">Already have an account?</h1>
              <Link
                to="/login"
                className="text-sm py-3 px-5 bg-white text-primary border-black border-4 font-semibold"
              >
                Login To Your Account
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-xl   justify-center items-center gap-10">
          <div className="flex flex-col text-xl   w-full items-center gap-2">
            <h1 className="font-semibold text-xl">Welcome TO</h1>
            <h1 className="text-6xl text-primary font-bold font-fontNav">
              BlitzBook
            </h1>
          </div>
          <div className="shape-signup-from">
            <form
              onSubmit={handleSubmit}
              className="h-full w-full items-center flex border-[6px] border-black  bg-white justify-center flex-col p-10 gap-5"
            >
              <div className="grid grid-cols-2">
                <div className="text-xl w-full">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="border-black border-2 py-1"
                    name="fname"
                    onChange={handleChange}
                  />
                </div>
                <div className="text-xl w-full">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="border-black border-2 py-1"
                    name="lname"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="text-xl flex flex-col w-full">
                <label>Username</label>
                <input
                  type="text"
                  className="border-black border-2 py-1"
                  name="username"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-xl w-full">
                <label>Date of birth</label>
                <input
                  type="date"
                  className="border-black border-2 py-1"
                  name="date"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-xl w-full">
                <label>Email</label>
                <input
                  type="email"
                  className="border-black border-2 py-1"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-xl w-full">
                <label>Password</label>
                <input
                  type="password"
                  className="border-black border-2 py-1"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col text-xl w-full">
                <label>ConfirmPassword</label>
                <input
                  type="password"
                  className="border-black border-2 py-1"
                  name="confirmpassword"
                  onChange={handleChange}
                />
              </div>
              <div className="w-full text-lg font-bold border-4 border-black">
                <button
                  className="bg-primary text-secondary w-full h-10"
                  onClick={handleSubmit}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </Layout> */}
    </>
  );
};

export default SignUp;
