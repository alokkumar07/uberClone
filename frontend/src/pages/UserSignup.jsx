import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
   const [firstname,setFirstname] =useState('')
   const [lastname,setLastname] =useState('')
   const [email,setEmail] =useState('')
   const [password,setPassword] =useState('')
   const [userData,setUserData] =useState('')

   const handleSubmit = (e)=>{
    e.preventDefault();
    
    setUserData({
        fullname:{
            firstname:firstname,
            lastname:lastname,
        },
        email:email,
        password:password
    })
    console.log(userData);
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    
   }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
      <img
        className="w-16  mb-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
      />
        <form onSubmit={handleSubmit}>
        <h3 className="text-lg mb-2 font-medium">What your fullname</h3>
        <div className="flex gap-4">
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-base"
            required
            type="text"
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            placeholder="firstname"
          />
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-base"
            required
            type="text"
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            placeholder="lastname"
          />
        </div>
          <h3 className="text-lg mb-2 font-medium">What your email</h3>
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
          Already have account? <Link to='/login' className="text-blue-600">Login here</Link>
          </p>
        </form>
      </div>
      <div>
      <p className='text-[10px] leading-tight'>This site is protected by RECAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  );
};

export default UserSignup;
