import React, { useState, useRef, } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import { checkValidate } from '../utils/checkValidate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Login = () => {
    const nevigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrormessage] = useState('');
    const email = useRef();
    const name = useRef();
    const password = useRef()

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleClick = () => {

        const message = checkValidate(email.current.value, password.current.value);
        setErrormessage(message);

        if (message) return;

        //   sign up/sign in

        if (!isSignInForm) {
            // Sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIS6HOxPvMUglUYxCm0jZFVP7bsoIjmp2oGAc11fI_2oS_u=s360-c-no"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                        nevigate("/browse")
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        setErrormessage(error);

                        // ...
                    });
                    console.log(user)

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage(errorCode + "-" + errorMessage);
                });

        } else {
            // Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    nevigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage(errorCode + "-" + errorMessage);
                });

        }




    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="cover" />
            </div>


            <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 p-12 bg-black absolute my-36 mx-auto left-0 right-0 text-white bg-opacity-90  rounded-md' >
                <h1 className='font-medium text-3xl py-6'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 bg-gray-800 w-full rounded-md' />}
                <input ref={email} type='text' placeholder='Email Address' className='p-2 my-2 bg-gray-800 w-full rounded-md' />
                <input ref={password} type='text' placeholder='Password' className='p-2 my-2 bg-gray-800 w-full rounded-md' />
                <button className='bg-red-900 p-4 my-4 w-full rounded-md ' onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='text-red-900 font-medium '>{errorMessage}</p>
                <p className='py-6 cursor-pointer' onClick={toggleSignInForm}><span className='text-gray-500'>{isSignInForm ? "New to Netflix? " : "Already User? "}</span>{isSignInForm ? "Sign up now" : "Sign In"}</p>
            </form>


        </div>

    )
}

export default Login;