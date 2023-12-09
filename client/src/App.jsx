import "./App.css";
// import "./assets/font/KidsMagezine/KidsMagezine.ttf"
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignUp from "./page/SignUp";
import LanddingPage from "./page/LanddingPage";
import Bookpage from "./components/Bookpage";
import AdminPage from "./page/admin/AdminPage";
import AccountPage from "./page/AccountPage";
import Layout from "./components/Layout";
import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "./lib/axios";
import PostbookPage from "./page/admin/PostbookPage";
import ManagementUser from "./page/admin/ManagementUser";

export const DataContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    username: "",
    email: "",
    loginState: false,
    role: "",
  });

  useEffect(() => {
    axiosInstance
      .get("/api/checkToken")
      .then((res) => {
        // console.log(res);
        setUserInfo({
          id: res.data.token.id,
          username: res.data.token.username,
          email: res.data.token.email,
          loginState: true,
          role: res.data.token.role,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInfo]);

  return (
    <>
      <DataContext.Provider value={{ userInfo, setUserInfo }}>
        <Layout>
          <Routes>
            <Route path="/" element={<LanddingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/book/:id" element={<Bookpage />} />
            <Route path="/Account/" element={<AccountPage />} />
            <Route path="/admin/dashboard" element={<AdminPage />} />
            <Route path="/admin/postbook" element={<PostbookPage />} />
            <Route path="/admin/managementUsers" element={<ManagementUser />} />
          </Routes>
        </Layout>
      </DataContext.Provider>
    </>
  );
}

export default App;
