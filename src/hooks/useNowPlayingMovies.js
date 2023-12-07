
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react'
const  useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
    const nowPlayingMovies= async()=>{
         const response= await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS)
         const data= await response.json();
         dispatch(addNowPlayingMovies(data.results))
    }
   useEffect(()=>{
       nowPlayingMovies();
    
   })
}

export default useNowPlayingMovies;