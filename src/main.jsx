import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './assets/Component/Root/Root';
import Home from './assets/Component/Home/Home';
import AppliedJobs from './assets/Component/AppliedJobs/AppliedJobs';
import ErroPage from './assets/Component/ErrorPage/ErroPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErroPage></ErroPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applide',
        element:<AppliedJobs></AppliedJobs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
