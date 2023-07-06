import React from 'react'
import './Searchbar.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Searchbar() {
   const [term, setTerm] = useState();
   const navigate = useNavigate()

   const handel = (e) => {
      e.preventDefault();
      navigate(`/search?q=${term}`)


   }
   return (
      <>
         <form onSubmit={handel}>
            <input onChange={(e) => { setTerm(e.target.value) }} 
            className="form-control me-2" type="search" placeholder="Search"
             aria-label="Search" />
         </form>

      </>

   )
}
