import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="cover" />
            </div>


            <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white bg-opacity-90  rounded-md' >
                <h1 className='font-medium text-3xl py-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-2 bg-gray-800 w-full rounded-md' />}
                <input type='text' placeholder='Email Address' className='p-2 my-2 bg-gray-800 w-full rounded-md' />
                <input type='text' placeholder='Password' className='p-2 my-2 bg-gray-800 w-full rounded-md' />
                <button className='bg-red-900 p-4 my-4 w-full rounded-md ' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-6 cursor-pointer' onClick={toggleSignInForm}><span className='text-gray-500'>{isSignInForm ? "New to Netflix? " : "Already User? "}</span>{isSignInForm ? "Sign up now" : "Sign In"}</p>
            </form>


        </div>

    )
}

export default Login;