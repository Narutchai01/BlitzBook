import { FaUserLarge } from "react-icons/fa6";
import { BsBasket3Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";

const Nav = () => {
  const Navigate = useNavigate();
  const { userInfo } = useContext(DataContext);
  const token = userInfo?.loginState || false;
  const role = userInfo?.role || "";

  const haveToken = () => {
    return (
      <>
        {role === "admin" ? (
          <div className="flex gap-5 h-full items-center">
            <Link to="/admin/dashboard" className="icon">
              <div className="flex flex-col items-center">
                <FaUserLarge />
                <p>Admin</p>
              </div>
              <div className="dropdown">
                <ul>
                  <li>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        axiosInstance.get("/api/logout").then(() => {
                          Navigate("/");
                          window.location.reload();
                        });
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </Link>
          </div>
        ) : (
          <div className="flex gap-5 h-full items-center">
            <Link to="/Account" className="icon">
              <div className="flex flex-col items-center">
                <FaUserLarge />
                <p>Account</p>
              </div>
              <div className="dropdown">
                <ul>
                  <li>
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        axiosInstance.get("/api/logout").then(() => {
                          Navigate("/");
                          window.location.reload();
                        });
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </Link>
            <div className="bg-white w-[2px] h-12"></div>
            <Link to="/Cart">
              <div className="flex flex-col items-center">
                <BsBasket3Fill />
                <p>Cart</p>
              </div>
            </Link>
          </div>
        )}
      </>
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
        <div className="bg-white w-[2px] h-12"></div>
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
      <div className="sticky top-0 z-50">
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
                <Link to="/BooksCollection">BooksCollection</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
