import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
    <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1554260570-83dc2f46ef79?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen h-screen  pt-5  flex w-full justify-between  flex-col bg-no-repeat bg-cover bg-center">
    <img  className="w-14  ml-8"
     src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
     />
    <div className="bg-white py-4 px-4 pb-7 ">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link to='/login' className=" flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">Continue</Link>
    </div>

    </div>
    </div>
  )
}

export default Home