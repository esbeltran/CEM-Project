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
import ManageAccounting from './pages/navigation/ManageAccounting.js';
import PriceMonitoring from './pages/navigation/PriceMonitoring.tsx';
import Settings from './pages/Settings.tsx';
import Inventory from './pages/navigation/Inventory.tsx';
import Buyer from './pages/navigation/Buyer.tsx';
import Suppliers from './pages/navigation/Suppliers.tsx';
import Nav from './pages/navigation/Nav.tsx';

// https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-appx 
// https://www.webrecto.com/react/navigate-to-another-page-on-button-click-in-react
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'navigate',
    element: <Nav />,
    children: [
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'buyer',
        element: <Buyer />
      },
      {
        path: 'manageaccounting',
        element: <ManageAccounting />
      },
      {
        path: 'suppliers',
        element: <Suppliers />
      },
      {
        path: 'monitoring',
        element: <PriceMonitoring />
      },
    ]
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
    path: '/settings',
    element: <Settings />
  }
  // will need notfound page
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App
