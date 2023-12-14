import { useContext } from "react";
import { DataContext } from "../App";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import Swal from "sweetalert2";

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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Account Page</h1>
            <p>
              name :{" "}
              <strong>
                {user.fname} {user.lname}
              </strong>
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="password"
            placeholder="pass"
            onChange={handleChange}
          />
          <input
            type="text"
            name="newpassword"
            placeholder="newpass"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AccountPage;
