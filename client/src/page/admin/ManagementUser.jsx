import SideBarAdmin from "./components/SideBarAdmin";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../lib/axios";

const ManagementUser = () => {
  const [dataUser, setDataUser] = useState({});

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
  }, [dataUser]);

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBarAdmin />
        <div className="bg-blue-600 w-screen"></div>
      </div>
    </>
  );
};

export default ManagementUser;
