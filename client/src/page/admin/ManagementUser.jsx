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

  console.log(dataUser);

  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBarAdmin />
        <div className="bg-blue-600 w-screen">
          <div>
            <CardUser dataUser={dataUser} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagementUser;
