import {NavLink} from "react-router-dom"

import "./Navbar.css"


export const Navbar = () => {
  return (
    <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}
