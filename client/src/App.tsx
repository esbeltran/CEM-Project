// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen h-screen bg-blue-400'>
        <Navbar />
        <Footer />
      </div>
    </>
  )
}

export default App
