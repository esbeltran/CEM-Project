// import { useState } from "react";

function Navbar() {
  return (
    <nav className=' bg-red-200 h-1/6 content-center  px-8'>
      <div className="flex flex-wrap space-x-4 content-evenly">
        <div className='flex flex-col md:flex-row md:space-x-5 bg-imag'>
          {/* div for right side icon */}
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/placeholder-icon.jpg" className="h-10" alt="Flowbite Logo" /> 
          {/* I'll figure you out later */}
      </a>
        </div>
        <div className=' flex flex-1 justify-center py-1'>
           {/* div for middle buttons icons */}
           <ul className="flex flex-row justify-around space-x-5 flex-1 text-2xl">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Inventory</a>
            </li>
            <li>
              <a href="#">Supplier</a>
            </li>
            <li>
              <a href="#">Buyer</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-5" >
         {/* div for login/signup buttrons */}
          <button className='bg-white rounded-lg px-5 py-2.5 text-green-700 border border-green-700 hover:bg-slate-200'>
            <span>Log In</span>
          </button>
          <button className='bg-green-700 rounded-lg px-5 py-2.5 text-white border border-none hover:bg-green-800'>
            <span>Sign Up</span>
          </button>
        </div>
      </div>
      </nav>
  )
}

export default Navbar