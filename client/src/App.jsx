import "./App.css";
// import "./assets/font/KidsMagezine/KidsMagezine.ttf"
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignUp from "./page/SignUp";
import LanddingPage from "./page/LanddingPage";
import Bookpage from "./components/Bookpage";
import AdminPage from "./page/admin/AdminPage";
import AccountPage from "./page/AccountPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<LanddingPage/>}/>
        <Route path="/BookPage/:bookID" element={<Bookpage/>} />
        <Route path="/admin" element={<AdminPage/>} />
        <Route path="/Account/:uid" element={<AccountPage/>} />
      </Routes>
    
    </>
  );
}

export default App;
