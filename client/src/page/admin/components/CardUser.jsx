/* eslint-disable react/prop-types */

const CardUser = ({ dataUser }) => {
  return (
    <>
      <div>
        {dataUser.map((user) => (
          <div key={user._id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardUser;
