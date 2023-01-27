import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth,
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut, 
         onAuthStateChanged, 
         AuthErrorCodes } from 'firebase/auth';
import { auth, db } from '../utils/init-firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const EmployerContext = createContext()

export const EmployerAuthContextProvider = ({children}) => {
    const [employer,setEmployer] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const toast = useToast();

    {/* Employer */}
    {/*sign up a new employer*/}
    const createEmployer = (email, password) => {
        setError('');
        createUserWithEmailAndPassword(auth, email, password) // create user
            .then(async (result) => {
                const ref = doc(db, "employer", email);
                const docRef = await setDoc(ref, {
                    email: email,
                    password: password
                })  
                toast({
                    status: 'success',
                    description: "Sign Up successfully!"
                })  
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if(error.code == "auth/email-already-in-use") {
                    setError("The email is already in use. Please enter another email.");
                    console.log(errorMessage);
                        toast({
                            status: 'error',
                            description: "The email is already in use. Please enter another email."
                        })
                }
                else if(error.code === AuthErrorCodes.WEAK_PASSWORD) {
                    setError("Password must be 6 characters!");
                    console.log("Password must be 6 characters!");
                    toast({
                        status: 'error',
                        description: "Password must be 6 characters!"
                    })
                }
                else {
                    setError(errorMessage);
                }
            });
        };

    {/*Check whether if user signing in is employer
        if true, let user sign in
        else if false do not let user sign in*/}
        const signInEmployer = async (email, password) => {
            signInWithEmailAndPassword(auth, email, password);
    
            const docRef = doc(db, "employer", email);
            const docSnap = await getDoc(docRef);
            localStorage.setItem('jap-email', email);
    
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());           
                navigate('/EmployerHome');
                toast({
                    status: 'success',
                    description: "Welcome!"
                })  
    
            } else {
            // doc.data() will be undefined in this case
                console.log("You haven't registered as employer yet. Create an account now!");
                toast({
                    status: 'error',
                    description: "You haven't registered as employer yet. Create an account now!"
                })
                navigate('/SignUpEmployer');
            }
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