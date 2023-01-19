import React, { useState, useEffect } from 'react'
import { TiUser } from 'react-icons/ti'
import { FiUser, FiBook } from 'react-icons/fi'
import { db } from '../../utils/init-firebase'
import { collection, getDocs, doc } from 'firebase/firestore'
import { CandidateAuth } from '../../contexts/AuthContext'

function Profile() {
    const [profile, setProfile] = useState([]);
    const candidateCollectionRef = collection(db, "candidate");

    useEffect(() => {
        const getProfile = async () => {
            const data = await getDocs(candidateCollectionRef);
            setProfile(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };
        getProfile();
    }, [])
    
  
return (
    <div className='min-h-screen'>
        <div className="flex justify-center avatar placeholder pt-28">
  				<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
					<TiUser size={60} />
  				</div>
			</div>
           
        <div className="w-full md:w-9/12 mx-auto pt-6 justify-center">
        { profile.map((doc) => {
                return(
                    <div>
                        <div className="p-6 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold leading-8">
                    <FiUser size={22} className='text-blue' />
                    <span className="tracking-wide font-bold font-projectFont text-blue">About</span>
                </div>
                <div className="text-black font-projectFont">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">First Name</div>
                            <div className="px-4 py-2">{doc.firstName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Last Name</div>
                            <div className="px-4 py-2">{profile.lastName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Gender</div>
                            <div className="px-4 py-2">Female</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Contact Number</div>
                            <div className="px-4 py-2">+11 998001001</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Country</div>
                            <div className="px-4 py-2">Malaysia</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">State / Province </div>
                            <div className="px-4 py-2">Penang</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">City</div>
                            <div className="px-4 py-2">Gelugor</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">
                                <a className="text-blue-200" href="mailto:jane@example.com">jane@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 pt-11 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <FiBook size={22} className='text-blue' />
                    <span className="tracking-wide font-bold font-projectFont text-blue">Education</span>
                </div>
                <div className="text-black font-projectFont">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">University / Institute</div>
                            <div className="px-4 py-2">Uni name</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Qualification</div>
                            <div className="px-4 py-2">Degree</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Field of Study</div>
                            <div className="px-4 py-2">Computer Science</div>
                        </div>
                    </div>
                </div>
            </div>

                    </div>
                );
            })}
            
        </div>
        <div className='flex justify-end mt-8 text-center w-full md:w-9/12 mx-auto'>
            <button className='px-8 py-3 mb-16 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Edit Profile</button>
        </div>
    </div>
    
  )
}

export default Profile

