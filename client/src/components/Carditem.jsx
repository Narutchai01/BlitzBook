/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Carditem = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item._id} className="card-item">
            <Link to={`/book/${item._id}`}>
              <img src={item.image} alt="" />
              <h1>{item.title}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Carditem;
