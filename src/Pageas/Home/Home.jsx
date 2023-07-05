import React from 'react'
import MyLoader from '../../MyLoader'
import { useFeach } from '../../Hook/useFeach'
import RecipeList from '../../Component/RecipeList';
export default function Home() {
  const { data, isLoading, error } = useFeach("http://localhost:3000/recipes")
  console.log(data, isLoading, error);
  return (
    <div className="home">
      {error && <p className="error">{error}</p>} 

      {isLoading && <div className="loader d-flex m-2 flex-wrap">
        <div className="m-2">
          <MyLoader />
        </div>
        <div className="m-2">
          <MyLoader />
        </div>
        <div className="m-2">
          <MyLoader />
        </div>
        <div className="m-2">
          <MyLoader />
        </div>
      </div>}

      {data&&<RecipeList recepies={data}/>}


    </div>
  )
}
