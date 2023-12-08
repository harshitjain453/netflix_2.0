import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearchPage from './GptSearchPage'
import { useSelector } from 'react-redux'


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    const showGPTPage=useSelector(store=>store.gpt.isGptPage)
  return (
    <div >
        <Header/>
        {showGPTPage?  <GptSearchPage/>:<>  <MainContainer/>
        <SecondaryContainer/></> }
       
      
    </div>
  )
}

export default Browse;