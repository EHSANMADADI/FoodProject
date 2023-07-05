import React from 'react'
import { useState, useEffect } from 'react'
export const useFeach = (url) => {
     const [data, setData] = useState(null);
     const [isLoading, setIsLoading] = useState(false);
     const [error, setError] = useState(null);
     useEffect(() => {
          const feachData = async () => {
               setIsLoading(true);
               try {
                    const response = await fetch(url)
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
          feachData()
     }, [url])

     return{ data, isLoading, error }
}
