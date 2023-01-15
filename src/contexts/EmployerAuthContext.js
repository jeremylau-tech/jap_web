import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/init-firebase';

const EmployerContext = createContext()

export const EmployerAuthContextProvider = ({children}) => {
    const [employer,setEmployer] = useState({});

    const createEmployer = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    const signInEmployer = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const logoutEmployer = () => {
        return signOut(auth);
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setEmployer(currentUser);     
        });
        return () => {
            unsubscribe();
        };
    },[])

    return (
        <EmployerContext.Provider value={{ createEmployer, employer, signInEmployer, logoutEmployer }}>
            {children}
        </EmployerContext.Provider>
    );
};

export const EmployerAuth = () => {
    return useContext(EmployerContext);
};