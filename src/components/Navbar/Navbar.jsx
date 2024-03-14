import React from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
   <>
   
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page" to="/cart">Cart</NavLink>
        </li>
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page" to="/category">Categories</NavLink>
        </li>
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page" to="/brands">Brands</NavLink>
        </li>
      
      
      </ul>



      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink
        className="btn  position-relative">
  <i className="fa-solid fa-cart-shopping" />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
  </span>
</NavLink>

        </li>
        <li className="nav-item">
        <NavLink
        className="nav-link active" aria-current="page"to='/Signup'>Logout</NavLink>
        </li>
        </ul>
    </div>
  </div>
</nav>

   
   </>
  )
}
