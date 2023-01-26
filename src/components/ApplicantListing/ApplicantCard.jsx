import React, { useState, useEffect } from 'react';
import { db } from '../../utils/init-firebase';
import { collection, getDocs} from 'firebase/firestore';
import { Link } from 'react-router-dom';

function ApplicantCard() {
    const [applicant, setApplicant] = useState([]);
    const [match, setMatch] = useState([]);
    const candidateColectionRef = collection(db, "application");
    const [editor, setEditor] = useState('');

    

    useEffect(() => {
        const getApplicant = async () => {
            const data = await getDocs(candidateColectionRef);
            setApplicant(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getApplicant();
    }, [])


return (

    <div className='min-h-screen'>
        <div className="flex justify-center avatar placeholder pt-28"></div>
           
        <div className="w-full md:w-9/12 mx-auto pt-6 justify-center">
        { applicant.map((doc) => {
                return(
                <div key={doc.id}>

                <div className="p-6 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold leading-8">
                    <span className="tracking-wide font-bold font-projectFont text-blue text-xl">{doc.personalEmail}</span>
                </div>
                <div className="text-black font-projectFont">
                <br />
                <div className="grid md:grid-cols-2 text-sm">
                <div>
                    <h2 class="text-gray-900 text-lg font-bold">Applied Position: {doc.val}</h2>
                    <h2 class="text-gray-900 text-lg font-bold">Company: {doc.val2}</h2>
                </div>
                <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-32 h-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                    <h1 class="text-4xl font-bold text-indigo-500 text-center">{doc.summation}/8</h1>
                    <p class="text-sm font-semibold text-gray-400">Matching Points</p>
                    </div>
                </div>
                </div>
                <Link to="/CandidateProfileEmployer" onChange={(e) => setEditor(e.target.value)} value={doc.personalEmail}  state={{ from : doc.personalEmail }} className="px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200">Candidate Profile</Link>
                
                </div>
            </div>
            </div>
                );
            })}
            
        </div>
        <div className='flex justify-end mt-8 text-center w-full md:w-9/12 mx-auto'>
    
        </div>
    </div>
    
  )
}

export default ApplicantCard