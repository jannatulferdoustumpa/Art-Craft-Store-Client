import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCraft from './component/AddCraft';
import AllCraft from './component/AllCraft';
import UpdateCraft from './component/UpdateCraft';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },{
    path : "/addcraft",
    element : <AddCraft></AddCraft>
  },
  {
    path : "/allcraft",
    element : <AllCraft></AllCraft>
  },
  {
    path : "/updatecraft",
    element : <UpdateCraft></UpdateCraft>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
