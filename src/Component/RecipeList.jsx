import React from 'react'
import {Link} from 'react-router-dom'
import './RecipeList.css'
export default function RecipeList({ recepies }) {
     return (
          <>
               <div className="container d-flex justify-content-between mt-5">
                    {recepies.map((item) => (

                         <div className="card border-3  mx-2 p-4" key={item.id}>
                              <h2>{item.title}</h2>
                              <p className='text-muted'>{item.cookingTime} to make</p>
                              <div className="text-muted">{item.method.substring(0, 80)}...</div>
                              <Link to={`/recipes/${item.id}`} className="btn btn-secondary w-75 mt-4 mx-auto">Cooks</Link>
                         
                         </div>
                    ))}
               </div>
          </>

     )
}
