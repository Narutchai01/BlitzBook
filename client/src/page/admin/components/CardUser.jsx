/* eslint-disable react/prop-types */

import { axiosInstance } from "../../../lib/axios";

const CardUser = ({ dataUser }) => {
 



  return (
    <>
      {dataUser.map((user) => (
        <div key={user._id} className="card-user">
          <p>username :{user.username}</p>
          <p>Email : {user.email}</p>
          <p>Role : {user.role}</p>
          <button onClick={()=>{
            axiosInstance
            .delete(`/api/deleteuser/${user._id}`)
            .then((res) => {
              console.log(res);
              window.location.reload();
            })
            .catch((err) => console.log(err));
          }}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CardUser;
