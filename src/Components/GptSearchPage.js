import React from 'react'
import Header from './Header'
import GptSearchBar from './GptSearchBar'
import { COVER_URL } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
         <div className='absolute -z-10'>
                <img src={COVER_URL} alt="cover" />
            </div>
        <Header/>
        <GptSearchBar/>

    </div>
  )
}

export default GptSearchPage