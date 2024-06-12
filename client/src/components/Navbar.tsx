// import { useState } from "react";

function Navbar() {
  return (
    <nav className='h-1/5 content-center m-8'>
      <div className="flex flex-wrap flex-row space-x-4 content-evenly h-full items-center">
        {/* div for right side icon */}
        <button className="h-full w-1/5">
          <a href="https://flowbite.com/" />
          {/* I'll figure you out later */}
          <img src="/src/assets/react.svg" className="h-full w-full" alt="Flowbite Logo" /> 
        </button>

        {/* middle thingies*/}
        <div className=' flex flex-1 justify-center py-1'>
          <ul className="flex flex-row justify-around flex-1 text-xl ">
            {/* div for middle buttons icons */}
            {
              [
                ['Home', '#Home'],
                ['Inventory', '#Inventory'],
                ['Supplier', '#Supplier'],
                ['Buyer', '#Buyer'],
                ['About', '#About']
              ].map(([wack, link]) => (
                <li>
                <a href={link}>{wack}</a>
              </li>
              ))
            }
          </ul>
        </div>

        {/* LOGIN AND SIGN UP BUTTONS */}
        <div className="flex flex-col md:flex-row md:space-x-5" >
         {/* div for login/signup buttrons */}
          <a href="#logIn" className='button bg-white text-plant border border-plant hover:bg-slate-200'>
            <span>Log In</span>
          </a>
          <a href="#SignUp" className='button bg-plant text-white border border-none hover:bg-green-800'>
            <span>Sign Up</span>
          </a>
        </div>
      </div>
      </nav>
  )
}

export default Navbar