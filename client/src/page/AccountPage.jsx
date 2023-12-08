import { useContext } from "react";
import { DataContext } from "../App";


const AccountPage = () => {

  const {userInfo} = useContext(DataContext);



  console.log(userInfo);

  return (
    <>
        <h1>{userInfo.id}</h1>
    </>
  );
};

export default AccountPage;
