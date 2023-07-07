import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogArticle from './components/BlogArticle.jsx'

import {
  createBrowserRouter,
  RouterProvider,  
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "blog",
    element: <BlogArticle />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
     <RouterProvider router={router} />
 // </React.StrictMode>,
)
