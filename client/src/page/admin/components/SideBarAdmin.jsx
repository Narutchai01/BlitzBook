import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <>
      <div className="bg-red-600 w-1/4 h-full">
        <ul className="text-3xl gap-8 flex flex-col">
          <li>
            <Link to="/admin/dashboard">DashBoard</Link>
          </li>
          <li>
            <Link >managementBooks</Link>
          </li>
          <li>
            <Link to="/admin/postbook">PostBooks</Link>
          </li>
          <li>
            <Link to="/admin/managementUsers">managementUsers</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBarAdmin;
