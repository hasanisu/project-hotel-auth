import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser]=useState({});
    const [loading, setLoading] = useState(true);
    

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    };


    const loginUser =(email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const loginWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const logOut =()=>{
        setLoading(true)
    return signOut(auth);
    };
    

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
            console.log('changed current User', currentUser)
        })

        return()=>{
            unsubcribe();
        }
    },[])
    
    
    
    const authInfo = {user, loading, createUser, loginUser, logOut, loginWithGoogle };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;