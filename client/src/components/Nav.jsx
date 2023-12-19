import { FaUserLarge } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../App";
import { axiosInstance } from "../lib/axios";
import { IoMenuSharp } from "react-icons/io5";

const Nav = () => {
  const Navigate = useNavigate();
  const { userInfo } = useContext(DataContext);
  const token = userInfo?.loginState || false;
  const role = userInfo?.role || "";
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [Toggle, setToggle] = useState(false);

  // ...

  useEffect(() => {
    const fetchSearch = async () => {
      axiosInstance.get("/api/getallbooks").then((res) => {
        setSearch(res.data);
      });
    };
    fetchSearch();
  }, []);

  const handleSearch = (e) => {
    setSearchResult(e.target.value);
  };

  function searchBooks(keyword) {
    if (!keyword) {
      return [];
    }
    const results = search.filter((book) => {
      const title = book.title.toLowerCase();
      return title.includes(keyword.toLowerCase());
    });
    return results;
  }

  const ShowSearch = searchBooks(searchResult).map((item) => {
    if (item.title !== undefined) {
      return (
        <div
          className="bg-white w-full text-black absolute top-12 rounded-lg"
          key={item._id}
        >
          <Link to={`/book/${item._id}`}>
            <div className="flex flex-col items-center">
              <p>{item.title}</p>
            </div>
          </Link>
        </div>
      );
    }
  });

  // console.log(searchBooks(searchResult).map((item)=>item.title));

  const haveToken = () => {
    return (
      <>
        {role === "admin" ? (
          <div className="flex gap-5 h-full items-center">
            <Link to="/admin/managementBooks" className="icon">
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
            <Link to="/Cart" onClick={() => window.scrollTo(0.0)}>
              <div className="flex flex-col items-center">
                <MdShoppingCart />
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
        <nav className="bg-[#C63535] md:h-20 text-white items-center">
          <div className="h-full container mx-auto px-48">
            <div className="flex w-full justify-between md:flex-row items-center h-full flex-col gap-10">
              <Link to="/">
                <h1 className="text-4xl font-bold font-fontNav">BlitzBook</h1>
              </Link>
              <div className="flex flex-col relative">
                <input
                  type="text"
                  className="text-black w-96 px-2 rounded-full py-1"
                  placeholder="search...."
                  onChange={handleSearch}
                />
                {ShowSearch}
              </div>
              {token ? haveToken() : noToken()}
            </div>
          </div>
        </nav>
        <nav className="bg-[#070B1A] md:h-10 text-white h-auto justify-center">
          <div className="h-full container mx-auto md:px-80">
            <button onClick={()=>setToggle(!Toggle)} className="md:hidden">
              <IoMenuSharp className="text-3xl" />
            </button>
            <ul className={Toggle ? "flex md:flex-row flex-col h-full items-center justify-between gap-10 py-10 text-xl" :"hidden lg:flex lg:flex-row lg:justify-between items-center h-full"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ShoppingPage/newrelease">New Release</Link>
              </li>
              <li>
                <Link to="/ShoppingPage/bestsaler">BestSeller</Link>
              </li>
              <li>
                <Link to="/genre">Genea</Link>
              </li>
              <li>
                <Link to="/publisher">Publisher</Link>
              </li>
              <li>
                <Link to="/Account/BooksCollection">BooksCollection</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
