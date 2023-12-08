
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
const  usePopularMovies=()=>{
    const dispatch=useDispatch();
    const popularMovies= async()=>{
         const response= await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS)
         const data= await response.json();
         dispatch(addPopularMovies(data.results))
    }
   useEffect(()=>{
       popularMovies();
    
   })
}

export default usePopularMovies;