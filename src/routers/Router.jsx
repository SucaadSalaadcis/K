import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import About from "../pages/About";
import SinglePage from "../pages/Singlepage";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadElec from "../dashboard/UploadElec";
import ManageElec from "../dashboard/ManageElec";
import EditElec from "../dashboard/EditElec";
import AllTotal from "../dashboard/AllTotal";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
      
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/cart",
            element: <Cart/>
        },
      
        {
            path: "/about",
            element: <About/>
        },
        {
          path: "/electronic/:id",
          element: <SinglePage/>,
          loader: ({params}) => fetch(`https://server-z329.onrender.com/electronic/${params.id}`)
      }
      ]
    },
    {
      path: "/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/dashboard/total",
          element: <AllTotal/>
        },
        {
          path: "/dashboard/upload",
          element: <UploadElec/>
        },
        {
          path: "/dashboard/manage",
          element: <ManageElec/>
        },
        {
          path: "/dashboard/edit/:id",
          element: <EditElec/>,
          loader: ({params}) => fetch(`https://server-z329.onrender.com/electronic/${params.id}`)
        },
      
      ]
    },
    
  ]);

  export default router;