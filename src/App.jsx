import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'


import {RouterProvider,createBrowserRouter} from "react-router-dom"
import MainLayout from './Layouts/MainLayout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Category from './components/Category/Category'
import Brands from './components/Brands/Brands'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import AuthLayout from './Layouts/AuthLayout'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
// import Notfound from './components/Notfound/Notfound'


export default function App(){
 const routes =createBrowserRouter([
  {
    path:'/',element:<MainLayout/>,children:[
      {path:'home',element:<ProtectedRoutes> <Home/> </ProtectedRoutes>},
      {path:'products',element: <ProtectedRoutes> <Products/> </ProtectedRoutes>},
      {path:'cart',element: <ProtectedRoutes> <Cart/> </ProtectedRoutes>},
      {path:'category',element: <ProtectedRoutes> <Category/> </ProtectedRoutes>},
      {path:'brands',element: <ProtectedRoutes> <Brands/> </ProtectedRoutes>}
      // {path:'*',element:<Notfound/>},
    ]
  },
 
 
{
 path:'/',element:<AuthLayout/>,children:[
      {path:'Signin',element:<Signin/>},
      {path:'Signup',element:<Signup/>},
      // {path:'*',element:<Notfound/>},
    ]
  }
 ])

 
    return (
     <>
     <RouterProvider router={routes}/>
     </>
    )
  }

