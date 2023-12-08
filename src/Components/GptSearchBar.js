import React from 'react'
import { useSelector } from 'react-redux'
import {lang} from '../utils/lang'

const GptSearchBar = () => {
    const langKey=useSelector((store)=>store.lang.langKey)

    return (
        <div className='p-[20%]'> 

            <form className='grid grid-cols-12 bg-black'>
                <input className='p-4 m-4 col-span-9' type="text" placeholder={lang[langKey].placeHolder}/>
                <button className='bg-red-900 p-4 m-4 col-span-3 text-white'>{lang[langKey].buttonText}</button>
            </form>
        </div>

    )
}

export default GptSearchBar