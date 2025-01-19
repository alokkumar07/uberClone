import { Route, Routes } from "react-router-dom"
import Start from "./pages/Start"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import Captainlogin from "./pages/Captainlogin"
import CaptainSignup from "./pages/CaptainSignup"
import { useContext } from "react"
import { UserDataContext } from "./context/userContext"
import Home from "./pages/Home"
import UserProtectedWrapper from "./pages/UserProtectedWrapper"
import UserLogout from "./pages/UserLogout"
import CaptainHome from "./pages/CaptainHome"
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper"

const App = () => {
  const ans =useContext(UserDataContext)
  console.log(ans);
  return (
    <div>
   <Routes>
   <Route path="/" element={<Start/>}/>
   <Route path="/login" element={<UserLogin/>}/>
   <Route path="/signup" element={<UserSignup/>}/>
   <Route path="/captain-login" element={<Captainlogin/>}/>
   <Route path="/captain-signup" element={<CaptainSignup/>}/>
   <Route path="/home" element={
    <UserProtectedWrapper>
    <Home/>
    </UserProtectedWrapper>
   }/>
   <Route path="/user/logout" element={
    <UserProtectedWrapper>
    <UserLogout/>
    </UserProtectedWrapper>
   }>

   </Route>
   <Route path="/captain-home" element={
    <CaptainProtectedWrapper>

   <CaptainHome/>
    </CaptainProtectedWrapper>

   }></Route>

   </Routes>
    </div>
  )
}

export default App
