import React, {useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_URL, PHOTO_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch=useDispatch();
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }
    useEffect(()=>{
       const unsubscriber= onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName, photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}))
              navigate('/browse')
              // ...
            } else {
              // User is signed out
                dispatch(removeUser())
                navigate('/')
              // ...
            }
          });
          return ()=>{
              unsubscriber();
          }
    },[])
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <div>
                <img className="w-44 mx-auto" src={LOGO_URL} alt="Netflix_Logo" />
            </div>
            {user && <div className='flex  items-center'>

                <img className="w-12 h-12 " src={PHOTO_URL} alt=""></img>
                <button className='text-red-800 text-lg font-medium  mx-1' onClick={handleSignOut}>Sign out</button>
            </div>}
            {/*  */}


        </div>

    )
}

export default Header