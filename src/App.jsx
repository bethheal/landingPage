import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/rootLayout'
import About from './pages/AboutPage/about'
import Contact from './pages/ContactPage/contact'
import Home from './pages/homePage/home'
import Services from './pages/ServicesPage/services'
import Products from './pages/ProductsPage/products'
import React from 'react'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <RootLayout/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:"about-us",
          element:<About/>,
        },
        {
          path:"services",
          element:<Services/>,
        },
        {
          path:"products",
          element:<Products/>,
        },

        {
          path:"contact-us",
          element:<Contact/>,
        },
      ]
    }
   ])
   return <RouterProvider router={router} />;

}

export default App
