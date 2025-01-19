import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const token = localStorage.getItem("token");
  //   const { user } = useContext(UserDataContext);
  const navigate = useNavigate();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    
    axios
    .get(`http://localhost:4000/captain/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
        console.log(response,'wrapper');
        if (response.status === 200) {
            const data = response.data.captain;
            setCaptain(data);
            setIsloading(false);
        }
    })
    .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        navigate("/captain-login");
    });
}, [token]);

  if (isloading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
