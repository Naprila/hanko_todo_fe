import { useNavigate } from "react-router-dom";
import { useUserData } from "./hooks/useUserData";
import { useEffect, useState } from "react";
import { hankoApi } from "./constants";


const LogoutBtn = () => {
  const { userDataLoading } = useUserData();
  const [hanko, setHanko] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  if (userDataLoading) {
    return <div>Loading...</div>;
  }

  const logout = async () => {
    try {
      await hanko?.user.logout();
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };


  return (
    <div className=" flex flex-row-reverse mx-2 my-1">
      <button className=" bg-green-600 px-2 py-1 border rounded-md text-gray-100 hover:bg-green-800" onClick={logout}>Logout</button>
    </div>
  );
};

export default LogoutBtn;
