import React from 'react'
import { useState, useEffect } from 'react'
export const useFeach = (url,method='GET') => {
     const [data, setData] = useState(null);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);
     const[options,setOptions] = useState(null)
     const postData=(postData)=>{
          setOptions({
               method: 'POST',
               headers:{"Content-Type": "application/json"},
               body:JSON.stringify(postData)})

     }



     useEffect(() => {
          const feachData = async (fetchOptions) => {
               setIsLoading(true);
               try {
                    const response = await fetch(url,{...fetchOptions})
                    if (!response.ok) {
                         console.log(response);
                         throw new Error(response.statusText);
                    }

                    const jsonData = await response.json();
                    setIsLoading(false);
                    setData(jsonData);
                    setError(null)

               } catch (error) {
                    setIsLoading(false);
                    setError(error.message)

               }
          }
          if(method ==='GET'){
          feachData()}
          if(method ==='POST' && options){
               feachData(options)
          }
     }, [url,method,options])

     return{ data, isLoading, error,postData}
}
