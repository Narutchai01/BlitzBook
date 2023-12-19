import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <>
      <div className="bg-[#C63535] w-1/4 h-auto">
        <ul className="text-3xl gap-8 flex flex-col">
          {/* <li>
            <Link to="/admin/dashboard">DashBoard</Link>
          </li> */}
          <li>
            <Link to="/admin/managementBooks">managementBooks</Link>
          </li>
          <li>
            <Link to="/admin/managementAuthors">managementAuthor</Link>
          </li>
          <li>
            <Link to="/admin/postbook">PostBooks</Link>
          </li>
          {/* <li>
            <Link to="/admin/managementUsers">managementUsers</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default SideBarAdmin;
