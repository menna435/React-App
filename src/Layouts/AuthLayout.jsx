import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from '../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
export default function AuthLayout() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary py-4">
  <div className="container-fluid">
  <NavLink
  className="navbar-brand"to='/'>
        <img src={logo} alt=''/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    



      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page"to='/Signup'>Signup</NavLink>
        </li>
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page"to='/Signin'>Signin</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>
        <Outlet></Outlet>
        </div>
  )
}
