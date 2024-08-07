import './App.css'
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Inventory from './pages/Inventory.tsx';
import { useEffect, useState } from 'react';
import { AuthService } from './services/auth.service.ts';
import Buyer from './pages/Buyer.tsx';
import ManageAccounting from './pages/ManageAccounting.tsx';
import Suppliers from './pages/Suppliers.tsx';
import PriceMonitoring from './pages/PriceMonitoring.tsx';
import Settings from './pages/Settings.tsx';
import Inventory from './pages/navigation/Inventory.tsx';
import Buyer from './pages/navigation/Buyer.tsx';
import Suppliers from './pages/navigation/Suppliers.tsx';

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
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const setAuth = (bool: boolean) =>{
    setIsAuthenticated(bool);
  }

  const isAuth = async () => {
    try {
      const service = new AuthService();
      const res = await service.checkAuthenticated();

      setIsAuthenticated(res);
    } catch (err) {
      console.error((err as Error).message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);
  
  // https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-appx 
  // https://www.webrecto.com/react/navigate-to-another-page-on-button-click-in-react
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: isAuthenticated ? <Navigate to="/inventory" replace/> : <Login setAuth={setAuth} />
    },
    {
      path: '/signup',
      element: isAuthenticated ? <Navigate to="/inventory" replace/> : <SignUp />
    },
    {
      path: '/inventory',
      element: isAuthenticated ? <Inventory setAuth={setAuth} /> : <Navigate to="/login" replace/>
    }
    // will need notfound page
  ]);
  
  return <RouterProvider router={router} />;
}}

export default App;
