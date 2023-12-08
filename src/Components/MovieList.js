import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    console.log(movies);
    return (
        <>
            <style>
                {`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }

                    .scrollbar-hide {
                        -ms-overflow-style: none;  /* IE and Edge */
                        scrollbar-width: none;  /* Firefox */
                    }
                `}
            </style>
            <div className='px-6'>
                <h1 className='text-2xl text-white py-4'>{title}</h1>
                <div className='flex overflow-x-scroll scrollbar-hide'>
                    {movies && <div className='flex'>
                        {movies.map((movie) => {
                            return (
                                <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                            )
                        })}
                    </div>}
                </div>
            </div>
        </>
    )
}

export default MovieList;
