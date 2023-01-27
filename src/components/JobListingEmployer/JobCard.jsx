import React, { useState, useEffect } from 'react';
import { db } from '../../utils/init-firebase';
import { collection, getDocs} from 'firebase/firestore';
import { Link } from 'react-router-dom';

function JobCard() {
    const [job, setJob] = useState([]);
    const candidateColectionRef = collection(db, "job");

    const [editor, setEditor] = useState('');

    useEffect(() => {
        const getJob = async () => {
            const data = await getDocs(candidateColectionRef);
            setJob(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getJob();
    }, [])

return (
    <div className='min-h-screen'>
        <div className="flex justify-center avatar placeholder pt-28">
			</div>
           
        <div className="w-full md:w-9/12 mx-auto pt-6 justify-center">
        { job.map((doc) => {
                return(
                    <div key={doc.id}>
                <div className="p-6 mt-12 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold leading-8">
                    <span className="tracking-wide font-bold font-projectFont text-orange text-xl">{doc.title} | {doc.company}</span>
                </div>
                <div className="text-black font-projectFont">
                <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Location</div>
                            <div className="px-4 py-2">{doc.location}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Nature</div>
                            <div className="px-4 py-2">{doc.type}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">CGPA</div>
                            <div className="px-4 py-2">{doc.cgpa}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Description</div>
                            <div className="px-4 py-2">{doc.description}</div>
                        </div>
                    </div>
                                     
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

export default JobCard