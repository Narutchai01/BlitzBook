import { useContext } from "react";
import { DataContext } from "../App";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import Swal from "sweetalert2";
import SildeBarUser from "../components/SildeBarUser";

const AccountPage = () => {
  const { userInfo } = useContext(DataContext);
  const [user, setUser] = useState({});
  const [newPassword, setNewPassword] = useState({
    id: userInfo.id,
    password: "",
    newpassword: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      await axiosInstance
        .get(`/api/getDataUserByID/${userInfo.id}`)
        .then((res) => {
          setUser(res.data);
        });
    };
    fetchUser();
  }, [userInfo.id]);

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance
      .put("/api/changepassword", newPassword)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your password has been changed!",
        });
        console.log(res.data);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  };

  return (
    <>
      <div className="grid grid-cols-[360px_4fr] h-screen border-b-2 border-black">
        <SildeBarUser />
        <div className="w-full">
          <div>
            <h1 className="text-3xl font-semibold">My Profile</h1>
            <div className="w-full grid grid-cols-3">
              <div>
                <h1>username</h1>
                <h1>{user.username}</h1>
              </div>
              <div>
                <h1>Name</h1>
                <h1>
                  {user.fname} {user.lname}
                </h1>
              </div>
              <div>
                <h1>email</h1>
                <h1>{user.email}</h1>
              </div>
              <div>
                <h1>Date of birth</h1>
                <h1>{user.date}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
