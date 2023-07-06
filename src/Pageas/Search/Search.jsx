import React from 'react'
import {useLocation} from 'react-router-dom'
import { useFeach } from '../../Hook/useFeach';
import RecipeList from '../../Component/RecipeList';

export default function Search() {

  
  const queryString=useLocation().search
  const queryParams=new URLSearchParams(queryString);
  const query=queryParams.get('q');///qurey=عبارت سرچ شده
  console.log(query);
  const url='http://localhost:3000/recipes?q='+query
   const{error,isloading,data}=useFeach(url);
   console.log(data);


  return (
    <div>
      <h2>Recipes Including "{query}"</h2> 
      {error&&<p>{error}</p>}
      {isloading && <p>is Loading ....</p>}
      {data && <RecipeList recepies={data}/> }
    </div>
  )
}
