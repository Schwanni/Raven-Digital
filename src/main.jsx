import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogArticle from './components/BlogArticle.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<App />} />
      <Route path="blog/:id" element={<BlogArticle />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   
        <RouterProvider router={router} />
   
  </React.StrictMode>,

)
