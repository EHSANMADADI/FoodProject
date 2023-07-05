import React from 'react'
import { useParams } from 'react-router-dom';
import { useFeach } from '../Hook/useFeach';
import MyLoader from '../MyLoader'
export default function Card() {
     const { id } = useParams();
     const deta = useFeach(` http://localhost:3000/recipes/${id}`);
     console.log(deta);
     return (
          <>
               {deta.isLoading &&
                    <div className="loader d-flex m-2 flex-wrap">
                         <div className="m-2">
                              <MyLoader />
                         </div>
                    </div>
               }

               {
                    deta.error && <h2>{deta.error}</h2>
               }



               {deta.data &&
                    <div className="border-3 bg-white container  mx-auto mt-5 p-4" key={deta.data.id}>
                         <h2>{deta.data.title}</h2>
                         <p className='text-muted'>{deta.data.cookingTime} to make</p>
                         <ul>
                              {deta.data.ingredients.map((item, index) => (<li className='m-2' key={index}>{item}</li>))}
                         </ul>
                         <div className="text-muted">{deta.data.method}</div>
                         {/* <Link to={`/recipe/${deta.id}`} className="btn btn-secondary w-75 mt-4 mx-auto">Cooks</Link> */}

                    </div>
               }
          </>

     )
}
