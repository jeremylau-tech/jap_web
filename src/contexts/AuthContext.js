import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/init-firebase';

const CandidateContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [candidate,setCandidate] = useState({});
    const [loading, setLoading] = useState(true);

    {/*sign up a new user*/}
    const createCandidate = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    };

    {/*sign in for an existing user*/}
    const signInCandidate = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    {/*log out for an existing user*/}
    const logoutCandidate = () => {
        return signOut(auth);
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setCandidate(currentUser); 
            setLoading(false)
                
        });
        return () => {
            unsubscribe();
        };
    },[])


    return (
        <CandidateContext.Provider value={{ createCandidate, candidate, signInCandidate, logoutCandidate }}>
            {!loading && children}
        </CandidateContext.Provider>
    );
};

export const CandidateAuth = () => {
    return useContext(CandidateContext);
};

