import React, { useState, useEffect } from 'react'
import { TiUser } from 'react-icons/ti'
import { FiUser, FiBook } from 'react-icons/fi'
import { db } from '../../utils/init-firebase'
import { getDoc, doc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function Profile() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = async () => {
            const email = localStorage.getItem('jap-email');
            const docRef = doc(db, "candidate", email);
            console.log(docRef)

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProfile({...docSnap.data()})

            } else {
                console.log("No such document!");
            }
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
            <div className="p-6 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold leading-8">
                    <FiUser size={22} className='text-blue' />
                    <span className="tracking-wide font-bold font-projectFont text-blue">About</span>
                </div>
                <div className="text-black font-projectFont">
                <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">First Name</div>
                            <div className="px-4 py-2">{profile.firstName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Last Name</div>
                            <div className="px-4 py-2">{profile.lastName}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Gender</div>
                            <div className="px-4 py-2">{profile.gender}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Contact Number</div>
                            <div className="px-4 py-2">{profile.contactNumber}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Country</div>
                            <div className="px-4 py-2">{profile.country}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">State</div>
                            <div className="px-4 py-2">{profile.state}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">City</div>
                            <div className="px-4 py-2">{profile.city}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">{profile.email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6 mb-6 pt-11 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <FiBook size={21} className='text-blue' />
                    <span className="tracking-wide font-bold font-projectFont text-blue">Education</span>
                </div>
                <div className="text-black font-projectFont">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">University / Institute</div>
                            <div className="px-4 py-2">{profile.university}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Qualification</div>
                            <div className="px-4 py-2">{profile.qualification}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Field of Study</div>
                            <div className="px-4 py-2">{profile.fieldStudy}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row-reverse mt-8 m-auto text-center'>
                <Link to="/EditEmployerProfile" className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-orange-500 hover:scale-105 active:bg-orange-200'>Edit Profile</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Profile

