import SideBarAdmin from "./components/SideBarAdmin";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../lib/axios";
import CardUser from "./components/CardUser";

const ManagementUser = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      axiosInstance
        .get("/api/getAllUser")
        .then((res) => {
          setDataUser(res.data);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  },[]);


  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBarAdmin />
        <div className="w-screen p-10">
          <h1 className="font-bold text-4xl my-10">Management User</h1>
          <div className="flex gap-10">
            <CardUser dataUser={dataUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementUser;
