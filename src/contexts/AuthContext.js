import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged, 
         AuthErrorCodes } from 'firebase/auth';
import { auth, db } from '../utils/init-firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const CandidateContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [candidate,setCandidate] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();

    {/* Candidate */}
    {/*sign up a new candidate*/}
    const createCandidate = (email, password) => {
        setError('');
        createUserWithEmailAndPassword(auth, email, password) // create user
            .then(async (result) => {
                const ref = doc(db, "candidate", email);
                const docRef = await setDoc(ref, {
                    email: email,
                    password: password
                })  
                .catch((e) => {
                    setError('Failed to create an account')
                    console.log(e.message)
                });

            })
            .catch((error) => {
                if(error.code === "auth/email-already-in-use") {
                    setError("The email is already in use. Please enter another email.");
                }
                else if(error.code === AuthErrorCodes.WEAK_PASSWORD) {
                    setError("Password must be 6 characters!");
                }
                else {
                    setError(error.message);
                }
            });
        };

    {/*Check whether if user signing in is candidate
        if true, let user sign in
        else if false do not let user sign in*/}
    const signInCandidate = async (email, password) => {
        signInWithEmailAndPassword(auth, email, password);

        const docRef = doc(db, "candidate", email);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('jap-email', email);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());           
            navigate('/CandidateHome');

        } else {
        // doc.data() will be undefined in this case
            console.log("You haven't registered as candidate yet. Create an account now!");
            navigate('/SignUpCandidate');
        }
    }

    {/*log out for an existing user*/}
    const logoutCandidate = () => {
        return signOut(auth);
    };

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setCandidate(currentUser);                 
        });
        return () => {
            unsubscribe();
        };
    },[])


    return (
        <CandidateContext.Provider value={{ createCandidate, candidate, signInCandidate, logoutCandidate }}>
            {children}
        </CandidateContext.Provider>
    );
};

export const CandidateAuth = () => {
    return useContext(CandidateContext);
};


