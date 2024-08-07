// import { useState } from "react";

import { useNavigate } from "react-router-dom"

function Navbar() {
  let navigate = useNavigate();
  const loginroute = ()=>{
    navigate("/login");
  }
  const signuproute = () => {
    navigate("/signup");
  }
  return (
    <nav className='h-1/5 content-center m-8'>
      <div className="flex flex-wrap flex-row space-x-4 content-evenly h-full items-center">
        {/* div for right side icon */}
        <button className="h-full w-1/5">
          {/* I'll figure you out later */}
          <img src="/src/assets/react.svg" className="h-full w-full" alt="Flowbite Logo" /> 
        </button>

        {/* middle thingies*/}
        <div className=' flex flex-1 justify-center py-1'>
          <ul className="flex flex-row justify-around flex-1 text-xl ">
            {/* div for middle buttons icons */}
            {
              [
                ['Home', '/'],
                ['Inventory', 'navigate/inventory'],
                ['Supplier', 'navigate/suppliers'],
                ['Buyer', 'navigate/buyer'],
                ['About', '#About']
              ].map(([wack, link]) => (
                <li key={wack} onClick={()=>navigate(link)}>
                {wack}
              </li>
              ))
            }
          </ul>
        </div>

        {/* LOGIN AND SIGN UP BUTTONS */}
        <div className="flex flex-col md:flex-row md:space-x-5" >
         {/* div for login/signup buttrons */}
          <button onClick={()=> loginroute()} className='button bg-white text-plant border border-plant hover:bg-slate-200'>
            <span>Log In</span>
          </button>
          <button onClick={()=> signuproute()} className='button bg-plant text-white border border-none hover:bg-green-800'>
            <span>Sign Up</span>
          </button>
        </div>
      </div>
      </nav>
  )
}

export default Navbar