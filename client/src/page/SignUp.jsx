import { axiosInstance } from "../lib/axios";
// import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
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
        <div className="grid grid-cols-2 h-auto">
          <div className="bg-blue-600">
            <h1>fasdasd</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
            <h1 className="text-6xl font-extrabold">SignUp</h1>
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
                <label htmlFor="password">username</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
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
              <div className="flex flex-col">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  placeholder="confirmpassword"
                  name="confirmpassword"
                  onChange={handleChange}
                />
              </div>
              <button className="bg-[#4A5468] rounded-lg p-3 my-4">
                SignUp
              </button>
            </form>
          </div>
        </div>
      {/* </Layout> */}
    </>
  );
};

export default SignUp;
