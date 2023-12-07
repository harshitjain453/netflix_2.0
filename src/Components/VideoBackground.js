import React, { useEffect } from 'react'
import useMovieTrailerVideo from '../hooks/useMovieTrailerVideo'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId }) => {
    useMovieTrailerVideo(movieId);
    const trailerKey = useSelector((store) => store.movies?.trailerVideo)
    if(!trailerKey) {
        return;}
    console.log(trailerKey?.key);

   
    return (
        <div className='w-screen '><iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerKey?.key + "?&autoplay=1&mute=1"} title="YouTube video player" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
    )
}

export default VideoBackground

