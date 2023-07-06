import { Link } from "react-router-dom";
import React from 'react'
import './Navbar.css'
import Searchbar from "./Searchbar";
export default function Navbar() {
  return (
    <div className="Nav">
      <div className="navbar container p-3 text-white">
        <Link to='/' className="text-white text-decoration-none" ><h1>Ehsan Food</h1></Link>
        <div className="d-flex box">
          <Link to='/create' className="text-white text-decoration-none border p-2 link mx-4" >CreateRecipe</Link>
          <Searchbar/>
         
        </div>

      </div>
    </div>
  )
}
