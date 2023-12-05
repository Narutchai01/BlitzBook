import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";

const AccountPage = () => {
  const { uid } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance
      .get(`/api/getDataUserByID?id=${uid}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  console.log(user);
  return (
    <>
    <Layout>
      <h1>Account Page {uid}</h1>
    </Layout>
    </>
  );
};

export default AccountPage;
