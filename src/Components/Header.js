import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(store => store.user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }
    return (
        <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
            <div>
                <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix_Logo" />
            </div>
            {user && <div className='flex  items-center'>

                <img className="w-12 h-12 " src={user.photoURL? user.photoURL :"https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"} alt=""></img>
                <button className='text-red-800 text-lg font-medium  mx-1' onClick={handleSignOut}>Sign out</button>
            </div>}
            {/*  */}


        </div>

    )
}

export default Header