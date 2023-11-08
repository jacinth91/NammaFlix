import { getAuth, signOut ,onAuthStateChanged } from "firebase/auth";
import app from "../utills/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch  } from "react-redux";
import { addUser, removeUser } from '../utills/userSlice';
import React, { useEffect } from 'react'

const Header = () => {
const navigate = useNavigate(); 
const dispatch = useDispatch();
const user = useSelector(store=>store.user)
console.log(user,'slectore')

useEffect(()=>{
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      navigate("/browse")
      
    } else {
      dispatch(removeUser())
      navigate("/")
      
    }
  });
},[]);

const handleSignOut= ()=>{
  const auth = getAuth(app);







  signOut(auth).then(() => {
  navigate("/")

  }).catch((error) => {
    console.log(error)
  });
}

    return (
      <div className="absolute w-screen z-10 bg-gradient-to-b from-black flex justify-between">
          <img className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
          />
          
       {user && <div className="flex p-4 ">
        <img className="w-10 h-10 rounded-md" alt="userIcon" src={user?.photoURL}></img>
        <button onClick={handleSignOut} className="mx-2 font-bold text-white">Sign Out</button>
        </div> } 
      </div>


    );
  };
  
  export default Header