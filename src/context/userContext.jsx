import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
    createUserWithEmailAndPassword, 
     onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/index';

const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    // estados
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged( auth, (res) => {
            res ? setUser(res) : setUser(null);
            setError("");
            setLoading(false);
        } );
        return unsubscribe;
    }, []);

    // função que registra um novo usuario na bd
    const registerUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
                .then( ( res ) => {} )
                .catch( ( err ) => setError(err.message) )
                .finally( () => setLoading(false) );
    }

    // função que faz o login
    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then( (res) => console.log(res) )
            .catch( (err) => setError(err.message) )
            .finally( () => setLoading(false) );
    }

    // função que termina a sessão
    const logoutUser = () => {
        signOut(auth);
    }

    // função que redifini a senha
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const contextValue = {
        user,
        loading,
        error,
        registerUser,
        signInUser,
        logoutUser,
        forgotPassword
    }
    return (
        <UserContext.Provider value={contextValue}> { children } </UserContext.Provider>
    )
}
