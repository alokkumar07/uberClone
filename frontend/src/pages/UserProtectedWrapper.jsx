import  { useContext, useEffect } from "react";
// import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
//   const { user } = useContext(UserDataContext);
  const navigate = useNavigate();
  

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);


  return (
 <>
 {children}
        </>
  )
};

export default UserProtectedWrapper;
