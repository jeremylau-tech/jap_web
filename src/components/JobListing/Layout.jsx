import React, { useState, useEffect } from 'react'
import { HiBuildingOffice } from 'react-icons/hi2';
import { MdOutlineDescription } from 'react-icons/md'
import { db } from '../../utils/init-firebase';
import { collection, getDocs} from 'firebase/firestore';


function Layout() {
    const [job, setJob] = useState([]);
    const docRef = collection(db, "job");
    
    useEffect(() => {
        const getJob = async () => {
            const data = await getDocs(docRef);
            setJob(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

        };
        getJob();
    }, []);
    
    return (
        
    <div className='min-h-screen'>
            <div className="flex justify-center avatar placeholder pt-28">
  				<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
					<HiBuildingOffice size={60} />
  				</div>
			</div>  
        <div className="w-full md:w-9/12 mx-auto pt-6 justify-center"> 
        
        { job.map((doc) => {

            return( 
            
            <div key={doc.id}>
            <div className="p-6 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold leading-8">
                    <MdOutlineDescription size={22} className='text-orange' />
                    <span className="tracking-wide font-bold font-projectFont text-orange">About</span>
                </div>
                <div className="text-black font-projectFont">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Job Title</div>
                            <div className="px-4 py-2">{job.title}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Location</div>
                            <div className="px-4 py-2">{job.location}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">CGPA</div>
                            <div className="px-4 py-2">{job.cgpa}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Description</div>
                            <div className="px-4 py-2">{job.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
        })}
        </div>
        <div className='flex justify-end mt-8 text-center w-full md:w-9/12 mx-auto'>
            <button className='px-8 py-3 mb-16 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-orange-500 hover:scale-105 active:bg-orange-200'>Edit Profile</button>
        </div>
    </div>
  )
}

export default Layout

