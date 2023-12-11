/* eslint-disable react/prop-types */

import { axiosInstance } from "../../../lib/axios";

const CardWritter = ({ data, type }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item._id} className="card-user">
          <p>name :{item.name}</p>
          <button
            onClick={() => {
              axiosInstance
                .delete(`/api/deleteWriter/${type}/${item._id}`)
                .then(() => {
                  window.location.reload();
                });
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default CardWritter;
