import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    console.log(movies);
  return (
    <div className=''>
          <VideoTitle title={movies[3].title} overview={movies[3].overview}/>
          <VideoBackground movieId={movies[3].id}/>

    </div>
  )
}

export default MainContainer