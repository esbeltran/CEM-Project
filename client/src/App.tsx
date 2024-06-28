// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Inventory from './pages/Inventory.tsx';
import Buyer from './pages/Buyer.tsx';
import ManageAccounting from './pages/ManageAccounting.tsx';
import Suppliers from './pages/Suppliers.tsx';
import PriceMonitoring from './pages/PriceMonitoring.tsx';
import Settings from './pages/Settings.tsx';

// https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-appx 
// https://www.webrecto.com/react/navigate-to-another-page-on-button-click-in-react
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/inventory',
    element: <Inventory />
  },
  {
    path: '/buyer',
    element: <Buyer />
  },
  {
    path: '/manageaccounting',
    element: <ManageAccounting />
  },
  {
    path: '/suppliers',
    element: <Suppliers />
  },
  {
    path: '/monitoring',
    element: <PriceMonitoring />
  },
  {
    path: '/settings',
    element: <Settings />
  }
  // will need notfound page
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App
