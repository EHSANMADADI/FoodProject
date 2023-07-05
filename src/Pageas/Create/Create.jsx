import React from 'react'
import { useState } from 'react'
import './Create.css'
export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [ingredints, setIngredints] = useState('');
  const [add, setAdd] = useState([])

  const handel = (e) => {
    e.preventDefault();
    if (ingredints && !add.includes(ingredints)) {
      setAdd((prevAdd) => [...prevAdd, ingredints])///prevAdd =>درایه های قبلی آرایه
      setIngredints('')
    }
    else {

    }

  }

  console.log(add)
  return (
    <div>



      <form onSubmit={(e) => e.preventDefault()} className="container mt-5 p-5 border-5 w-50 ">
        <h4 className="mb-3">Add New Recipe</h4>

        <div className="form-floating mb-3">
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className="form-control" placeholder="Title" id="floatingInput" />
          <label htmlFor="floatingInput">Title</label>
        </div>

        <div className="form-floating input-group mb-3">
          <input onChange={(e) => setIngredints(e.target.value)} value={ingredints} type="text" placeholder="Ingredints" className="form-control" />
          <label htmlFor="floatingPassword">Ingredints</label>
          <button onClick={handel} className="btn btn-banafsh rounded">Add</button>
        </div>


        <div className="d-flex flex-wrap">
          {add && add.map((item) => {
            return (<>
              <div className="item p-3 m-3"><span>{item}</span></div>
            </>)
          })} 
        </div>


        <div className="form-floating mb-3">
          <input onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} type="number" placeholder="CookingTime" className="form-control" id="floatingPassword" />
          <label htmlFor="floatingPassword">cookingTime</label>
        </div>


        <div className="form-floating mb-3">
          <textarea className="form-control text-erea" onChange={(e) => setMethod(e.target.value)} value={method} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          <label htmlFor="floatingTextarea">Methodes</label>
        </div>

        <button className="btn btn-banafsh py-1 px-4">Send</button>
      </form>

    </div>
  )
}
