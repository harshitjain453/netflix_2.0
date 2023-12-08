import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
    return (

            <div className=' w-60 h-36  mr-2 '>
                <img className='w-full h-full object-cover' src={IMG_CDN_URL + posterPath} alt="poster_path" />
            </div>


    )
}

export default MovieCard;

