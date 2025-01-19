import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserLogin = () => {
   const [email,setEmail] =useState('')
   const [password,setPassword] =useState('')
   const [userData,setUserData] =useState('')

     const {user, setUser} =useContext(UserDataContext)


   const navigate = useNavigate()

   const handleSubmit = async(e)=>{
    e.preventDefault();

    const userData  ={
        email:email,
        password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    console.log(response,"aaaa");
    if(response.status === 200){
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token)
        navigate('/home');
    }

    setEmail('')
    setPassword('')
    console.log(userData);
    
   }
//    const []
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
      <img
        className="w-16  mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg mb-2 font-medium">What  your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base"
            required
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base"
            required
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button className="bg-[#111] mb-3 text-white rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            New here? <Link to='/signup' className="text-blue-600">Create new Account</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#3a6e88] mb-7 flex items-center justify-center text-white rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
