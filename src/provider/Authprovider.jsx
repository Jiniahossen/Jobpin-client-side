import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";




export const AuthContext= createContext(null);
const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider()

const Authprovider = ({children}) => {

    const[user,setUser]=useState({});
    const [loading,setloading]=useState(true)

    // google sihn in
    const googleSignin=()=>{
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // github sign in
    const githubSignIn=()=>{
        setloading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // user create 

    const createUser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // log in user

    const logIn=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logged in user

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
              setUser(currentUser);
              setloading(false)
              
          })
          return ()=>{
             unSubscribe()
          }
      },[])

    //   sign out

    const signout=()=>{
       return signOut(auth);
       
    }

    // profile update 
     const handleProfileUpdate=(name,photo)=>{
        updateProfile(auth.currentUser, {
            displayName:name, photoURL:photo,
        })
     }


    const authInfo={
        googleSignin,
        githubSignIn,
        createUser,
        logIn,
        user,
        signout,
        loading,
        handleProfileUpdate

    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
        
       </AuthContext.Provider>
    );
};

export default Authprovider;