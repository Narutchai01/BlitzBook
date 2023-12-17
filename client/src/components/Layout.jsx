/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Nav from "./Nav";
import { useEffect } from "react";

const Layout = ({ children }) => {



  useEffect(()=>{
    window.scroll(0,0)
  },[location.pathname])
  return (
    <>
      <Nav/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;