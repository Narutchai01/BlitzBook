import { useContext } from "react";
import { DataContext } from "../App";
import { useState, useEffect } from "react";
import { axiosInstance } from "../lib/axios";
import SildeBarUser from "../components/SildeBarUser";

const AccountPage = () => {
  const { userInfo } = useContext(DataContext);
  const [user, setUser] = useState({});
  

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

  

  return (
    <>
      <div className="grid md:grid-cols-[360px_4fr] h-screen border-b-2 border-black bg-bgcolor">
        <SildeBarUser />
        <div className="w-full">
          <div className="px-16 py-8">
            <h1 className="text-3xl font-semibold">My Profile</h1>
            <div className="w-full grid md:grid-cols-3 gap-10 text-xl font-semibold">
              <div className="flex flex-col gap-4">
                <h1>Username</h1>
                <h1>{user.username}</h1>
              </div>
              <div className="flex flex-col gap-4">
                <h1>Name</h1>
                <h1>
                  {user.fname} {user.lname}
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <h1>email</h1>
                <h1>{user.email}</h1>
              </div>
              <div  >
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
