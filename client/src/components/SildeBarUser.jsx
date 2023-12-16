import { FaRegUser } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { BiPurchaseTagAlt } from "react-icons/bi";

import { Link } from "react-router-dom";

const SildeBarUser = () => {
  return (
    <>
      <div className="bg-third w-full h-full text-white flex flex-col items-center gap-5 py-10">
        <div className="flex items-center gap-2 text-2xl">
          <FaRegUser className="text-primary text-2xl" />
          <h1 className="font-semibold">Account Information</h1>
        </div>
        <ul className="flex flex-col gap-5 text-lg">
          <li>
            <Link to="/account">My Profile</Link>
          </li>
          <li>
            <Link to="/Account/changepassword">Change Password</Link>
          </li>
        </ul>
        <Link to="/Account/MyPurchase" className="flex items-center text-2xl text-start w-full px-16 gap-2">
          <BiPurchaseTagAlt className="text-yellow" />
          <h1>My Purchase</h1>
        </Link>
        <Link to="/account/payment" className="flex items-center gap-2 text-2xl">
          <BsBookHalf />
          <h1>My Books Collection</h1>
        </Link>
      </div>
    </>
  );
};

export default SildeBarUser;
