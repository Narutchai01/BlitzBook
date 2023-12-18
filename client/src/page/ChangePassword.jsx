import SildeBarUser from "../components/SildeBarUser";
import { useState, useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const { userInfo } = useContext(DataContext);
  const [newPassword, setNewPassword] = useState({
    id: userInfo.id,
    password: "",
    newpassword: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword.newpassword !== newPassword.confirmpassword) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Old Password not match!",
        });
        return false;
      }
      await axiosInstance
        .put("/api/changepassword", newPassword)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Password Changed!",
          });
          console.log(res);
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Old Password not match!",
      });
    }
  };

  return (
    <>
      <div className="grid md:grid-cols-[360px_4fr] h-screen border-b-2 border-black bg-bgcolor">
        <SildeBarUser />
        <div className="w-full">
          <div className="px-16 py-8">
            <h1 className="text-3xl font-semibold">Change Password</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="px-16 py-8  md:w-4/12 text-xl font-semibold">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label>Old Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    className="border-2 border-black px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label>New Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="newpassword"
                    className="border-2 border-black px-2 py-1"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    name="confirmpassword"
                    className="border-2 border-black px-2 py-1"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary px-4 py-2 border-2 border-black font-semibold text-yellow"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
