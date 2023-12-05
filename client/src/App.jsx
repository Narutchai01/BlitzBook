import "./App.css";
// import "./assets/font/KidsMagezine/KidsMagezine.ttf"
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignUp from "./page/SignUp";
import LanddingPage from "./page/LanddingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<LanddingPage/>}/>
      </Routes>
    
    </>
  );
}

export default App;
