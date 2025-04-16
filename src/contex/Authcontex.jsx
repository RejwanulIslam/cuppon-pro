import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'


export const authcontex = createContext()


export default function Authcontex({ children }) {
    const provider = new GoogleAuthProvider();
    const [user, setuser] = useState(null)
    const [loding, setloding] = useState(true)
    console.log(user)


    const handlerejester = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log(userCredential.user)
            })

    }
    const handlelogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log(userCredential.user)
            })

    }



    //google login
    const handlegooglelogin = (email, password) => {
        return signInWithPopup(auth, provider)
            .then((userCredential) => {

                console.log(userCredential.user)
            })

    }


    //updateprofile
   

        const updateprofile = (name, photo) => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            })
        }
    
  

    //logOut

    const logOut = () => {
        signOut(auth)
    }


    //manage user

    useEffect(()=>{
    const unsubscribe=    onAuthStateChanged(auth, (users) => {
            if (users) {
                setuser(users)
                
            } else {
    
                setuser(null)
            }
            setloding(false)
            return ()=>{unsubscribe()}
        });
    },[])
    


    const authinfo = {
        handlerejester,
        handlegooglelogin,
        logOut,
        updateprofile,
        user,
        setuser,
        handlelogin,
        loding,
        setloding

    }
    return (
        <div>
            <authcontex.Provider value={authinfo}>
                {children}
            </authcontex.Provider>
        </div>
    )
}
