/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Carditem = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item.id} className="card-item">
            <Link to={`/Bookpage/${item.id}`}>
              <img src={item.thumbnailUrl} alt="" />
              <h1>{item.title}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Carditem;
