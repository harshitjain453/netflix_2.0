import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, PHOTO_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptPage } from '../utils/gptSearchSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { selectLanguge } from '../utils/langSlice';
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const gpt=useSelector(store=>store.gpt.isGptPage);
    
  


    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }
    const handleGPTSearch = () => {
        dispatch(toggleGptPage());

    }
    const handleLanguageClick=(e)=>{
         dispatch(selectLanguge(e.target.value))
    }
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate('/browse')
                // ...
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate('/')
                // ...
            }
        });
        return () => {
            unsubscriber();
        }
    }, [])
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <div>
                <img className="w-44 mx-auto" src={LOGO_URL} alt="Netflix_Logo" />
            </div>
            {user && <div className='flex  items-center'>

               { gpt && <select className='px-4 py-2 m-4 bg-black text-white text-lg' onChange={handleLanguageClick}>
                    {SUPPORTED_LANG.map((lang)=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
                   
                </select>}
            <button className='bg-purple-800 text-lg px-6 py-2 m-4  font-medium text-white  rounded-lg' onClick={handleGPTSearch}>{gpt ? "Home":"GPT Search" }</button>
                <img className="w-12 h-12 " src={PHOTO_URL} alt=""></img>
                <button className='text-red-800 text-lg font-medium  mx-1' onClick={handleSignOut}>Sign out</button>
            </div>}
            {/*  */}


        </div>

    )
}

export default Header