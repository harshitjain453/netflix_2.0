import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
    const movieList = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
        
    {movieList && <div className='-mt-48 z-50 pl-12 relative'>
        <MovieList title={"Now Playing"} movies={movieList.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movieList.topRatedMovies}/>
        <MovieList title={"Trending"} movies={movieList.popularMovies}/>
        <MovieList title={"Horror"} movies={movieList.nowPlayingMovies}/>
        <MovieList title={"Documentries"} movies={movieList.nowPlayingMovies}/>
       
    
        </div>}
        
    </div>
  )
}

export default SecondaryContainer;