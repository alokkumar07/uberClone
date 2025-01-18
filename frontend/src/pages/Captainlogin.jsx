import { useState } from "react";
import { Link } from "react-router-dom";

const Captainlogin = () => {
   const [email,setEmail] =useState('')
   const [password,setPassword] =useState('')
   const [captainData,setCaptainData] =useState('')

   const handleSubmit = (e)=>{
    e.preventDefault();
    setEmail('')
    setPassword('')
    setCaptainData({email,password})
    console.log(captainData);
    
   }
//    const []
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
      <img
        className="w-20  mb-3"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
            join now? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login' className="bg-[#77980d] mb-7 flex items-center justify-center text-white rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
