import { FaUserLarge } from "react-icons/fa6";
import { BsBasket3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";


const Nav = () => {

  const {userInfo} = useContext(DataContext);
  const token = userInfo?.loginState || false;



  const haveToken = () => {
    return (
      <div className="flex gap-5 h-full items-center">
        <Link to={`/Account/`}>
          <div className="flex flex-col items-center">
            <FaUserLarge />
            <p>Account</p>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <BsBasket3Fill />
          <p>Cart</p>
        </div>
      </div>
    );
  };

  const noToken = () => {
    return (
      <div className="flex gap-5 h-full items-center">
        <Link to="/login">
          <div className="flex flex-col items-center">
            <p>Login</p>
          </div>
        </Link>
        <Link to="/signup">
          <div className="flex flex-col items-center">
            <p>Signup</p>
          </div>
        </Link>
      </div>
    );
  };


  return (
    <>
      <nav className="bg-[#C63535] h-20 text-white items-center">
        <div className="h-full container mx-auto px-56">
          <div className="flex justify-between h-full items-center">
            <div>
              <Link to="/">
                <h1 className="text-4xl font-bold font-fontNav">BlitzBook</h1>
              </Link>
            </div>
            <div>
              <input
                type="text"
                className="text-black w-96 px-2 rounded-full py-1"
                placeholder="search...."
              />
            </div>
            {token ? haveToken() : noToken()}
          </div>
        </div>
      </nav>
      <nav className="bg-[#070B1A] h-10 text-white">
        <div className="h-full container mx-auto px-80">
          <ul className="flex justify-between h-full items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">New Release</a>
            </li>
            <li>
              <a href="#">BestSeller</a>
            </li>
            <li>
              <a href="#">Genea</a>
            </li>
            <li>
              <a href="#">Publisher</a>
            </li>
            <li>
              <a href="#">MyBooks</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
