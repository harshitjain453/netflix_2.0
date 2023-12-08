
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
const  useTopRatedMovies=()=>{
    const dispatch=useDispatch();
    const topRatedMovies= async()=>{
         const response= await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS)
         const data= await response.json();
         dispatch(addTopRatedMovies(data.results))
    }
   useEffect(()=>{
       topRatedMovies();
    
   })
}

export default useTopRatedMovies;