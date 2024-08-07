// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen flex flex-col space-y-8 overflow-y-auto'>
        <Navbar />
        {/* Title card */}
        <div>
          <h2 className='text-xl'>
            MAJAYJAY AGRICULTURAL SYSTEM
          </h2>
          <h1 className='text-plant font-bold text-3xl'>
            INVENTORY MANAGEMENT SYSTEM
          </h1>
        </div>

        {/* image and buttons thingy */}
        <div className='flex flex-row p-8 place-content-center'>
          {/* image here */}
          {/* will figure out shadow later */}
          <img className='h-full shadow-sm' src='/src/assets/placeholder.png'/>

          {/* buttons describing stuff */}
          <div className='w-1/2'>
            <ul className='space-y-5'>
            {[
              ['Inventory Management', 'Ease of managing your inventory and stocks with our very user friendly management system', '#Inventory'],
              ['Buyer and Seller Database', 'Browse with our variety of seasoned field buyers and sellers to help you grow and be connected with community', '#Buyer'],
              ['Logistics', 'See estimated computation of logistic cost for your produce', '#Logistics']
            ].map(([title, description, link]) => (
              <li key={title}>
                <button className='button w-3/5 bg-plant text-white'>
                <h1 className='font-medium'>{title}</h1>
                <p className='font-light'>{description}</p>
                <a href={link}/>
                </button>
              </li>
            ))
            }
            </ul>
          </div>
        </div>

        {/* interactive map daw */}
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='uppercase text-plant font-medium text-3xl'>Interactive Map of Majayjay Laguna</h1>
          {/* add map here TO BE MADE DRAGAABLE WILL FIGURE OUT SOMEDAY*/}
          <div className='h-80 bg-red-200 w-1/2'> 
            <img className='shadow-sm' src='/src/assets/placeholder.png'/>
          </div>
        </div>

        {/* add logistics cost */}
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='uppercase text-plant font-medium text-3xl'>Logistics Cost</h1>
          {/* add map here TO BE MADE DRAGAABLE WILL FIGURE OUT SOMEDAY*/}
          <div className='h-80 bg-red-200 w-1/2'> 
            <img className='shadow-sm' src='/src/assets/placeholder.png'/>
          </div>
          {/* summary logistics */}
          <div className='flex flex-row bg-plant w-1/2 p-2 text-white place-content-between'>
            <p>Estimated Logistics Cost</p>
            <p>P500.00 / 8 Liters of Fuel</p>
          </div>
          {/* disclaimer thingy */}
          <p className='w-1/2 text-sm italic'> Our website now offers a feature for farmers to quickly calculate transportation costs from point to point for their produce and products. By inputting origin, destination, and quantity, farmers receive instant estimates, saving time and aiding in logistics planning for increased profitability.</p>
        </div>

        {/* SUPPLIER AND BUYER DB SECTIONS */}
        <div className='flex flex-col items-center space-y-2'>
          <h1 className='uppercase text-plant font-medium text-3xl'>Supplier and Buyer Database</h1>
          {/* I have no idea if this is supposed to be an image or an interactive mini version of the logistics page so i'll add a placeholder*/}
          <div className='h-80 overflow-auto bg-red-200 w-1/2'> 
            <img className='shadow-sm' src='/src/assets/placeholder.png'/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;
