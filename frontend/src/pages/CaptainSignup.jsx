import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from 'axios'

const CaptainSignup = () => {
   const [firstname,setFirstname] =useState('')
   const [lastname,setLastname] =useState('')
   const [email,setEmail] =useState('')
   const [password,setPassword] =useState('')
   const [userData,setUserData] =useState('')
   const [vehicleColor, setVehicleColor] = useState('')
   const [vehiclePlate, setVehiclePlate] = useState('')
   const [vehicleCapacity, setVehicleCapacity] = useState('')
   const [vehicleType, setVehicleType] = useState('')




   const {captain ,setCaptain} =useContext(CaptainDataContext)
   const navigate = useNavigate();

   const handleSubmit = async(e)=>{
    e.preventDefault();
 
   const captainData=  {
        fullname:{
            firstname:firstname,
            lastname:lastname,
        },
        email:email,
        password:password,
          vechile:{
            color:vehicleColor,
            plate:vehiclePlate,
            capacity:vehicleCapacity,
            vechileType:vehicleType
          }
    }

    const response = await axios.post(`http://localhost:4000/captain/register`, captainData);
    console.log(response,"captainResponse");
    if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token)
        navigate('/captain-home');
    }

    console.log(userData);
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')

    
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
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm"
            required
            type="text"
            value={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
            placeholder="firstname"
          />
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm"
            required
            type="text"
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            placeholder="lastname"
          />
        </div>
          <h3 className="text-lg mb-2 font-medium">What your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-sm"
            required
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium w-full">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-sm"
            required
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <h3 className="text-lg mb-2 font-medium">Vechile Information</h3>
          <div className="flex gap-4 mb-7">
          <input
            className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border border-gray-300  text-lg placeholder:text-sm"
            required
            placeholder="Vechile color "
            type="text"
            value={vehicleColor}
            onChange={(e)=>setVehicleColor(e.target.value)}
          />
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm"
            required
            placeholder="Vechile Plate"
            type="text"
            value={vehiclePlate}
            onChange={(e)=>setVehiclePlate(e.target.value)}
          />
          </div>
          <div className="flex gap-4 mb-7">

          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm"
            required
            placeholder="Vechile Capacity"
            type="number"
            value={vehicleCapacity}
            onChange={(e)=>setVehicleCapacity(e.target.value)}
          />
       <select
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border border-gray-300 w-1/2 text-lg placeholder:text-sm"
        required
        value={vehicleType}
        onChange={(e)=>setVehicleType(e.target.value)}
        >
             <option value="" disabled>Select Vehicle Type</option>
        <option value="car">car</option>
        <option value="bike">bike</option>
        <option value="van">van</option>
        </select>

</div>

          <button className="bg-[#111] mb-3 text-white rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-sm">
          Create Captain Account
          </button>
          <p className="text-center">
          Already have account? <Link to='/captain-login' className="text-blue-600">Login here</Link>
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

export default CaptainSignup;
