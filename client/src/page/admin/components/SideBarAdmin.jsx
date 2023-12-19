import { Link } from "react-router-dom";

const SideBarAdmin = () => {
  return (
    <>
      <div className="bg-third text-white w-full h-full">
        <ul className="text-3xl gap-8 grid justify-center w-full py-16">
          <li>
            <Link to="/admin/managementBooks">managementBooks</Link>
          </li>
          <li>
            <Link to="/admin/managementAuthors">managementAuthor</Link>
          </li>
          <li>
            <Link to="/admin/postbook">PostBooks</Link>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default SideBarAdmin;
