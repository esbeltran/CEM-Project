import './App.css'
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import Inventory from './pages/navigation/Inventory.tsx';
import { useEffect, useState } from 'react';
import { AuthService } from './services/auth.service.ts';
import Buyer from './pages/navigation/Buyer.tsx';
import ManageAccounting from './pages/navigation/ManageAccounting.js';';
import Suppliers from './pages/Suppliers.tsx';
import PriceMonitoring from './pages/navigation/PriceMonitoring.tsx';
import Settings from './pages/Settings.tsx';
import Inventory from './pages/navigation/Inventory.tsx';
import Buyer from './pages/navigation/Buyer.tsx';
import Suppliers from './pages/navigation/Suppliers.tsx';
import Nav from './pages/navigation/Nav.tsx';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
      primary: {
          main: '#E3D026',
          light: '#E9DB5D',
          dark: '#A29415',
          contrastText: '#242105',
      }
  }
})


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
  
  return <ThemeProvider theme={theme}><RouterProvider router={router} /></ThemeProvider>;;
}}

export default App;
