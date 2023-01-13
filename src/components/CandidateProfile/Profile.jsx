import React from 'react'
import { TiUser } from 'react-icons/ti'
import { FiUser, FiBook } from 'react-icons/fi'

function Profile() {
  return (
    <div className='min-h-screen'>
        <div className="flex justify-center avatar placeholder pt-28">
  				<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
					<TiUser size={60} />
  				</div>
			</div>  
        <div class="w-full md:w-9/12 mx-auto pt-6 justify-center"> 
            <div class="p-6 shadow-xl rounded-md">
                <div class="flex items-center space-x-2 font-semibold leading-8">
                    <FiUser size={22} className='text-blue' />
                    <span className="tracking-wide font-bold font-projectFont text-blue">About</span>
                </div>
                <div class="text-black font-projectFont">
                    <div class="grid md:grid-cols-2 text-sm">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">First Name</div>
                            <div class="px-4 py-2">Jane</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Last Name</div>
                            <div class="px-4 py-2">Doe</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Gender</div>
                            <div class="px-4 py-2">Female</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Contact Number</div>
                            <div class="px-4 py-2">+11 998001001</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Country</div>
                            <div class="px-4 py-2">Malaysia</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">State / Province </div>
                            <div class="px-4 py-2">Penang</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">City</div>
                            <div class="px-4 py-2">Gelugor</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Email</div>
                            <div class="px-4 py-2">
                                <a class="text-blue-200" href="mailto:jane@example.com">jane@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-6 pt-11 shadow-xl rounded-md">
                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                    <FiBook size={22} className='text-blue' />
                    <span className="tracking-wide font-bold font-projectFont text-blue">Education</span>
                </div>
                <div class="text-black font-projectFont">
                    <div class="grid md:grid-cols-2 text-sm">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">University / Institute</div>
                            <div class="px-4 py-2">Uni name</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Qualification</div>
                            <div class="px-4 py-2">Degree</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Field of Study</div>
                            <div class="px-4 py-2">Computer Science</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end mt-8 text-center w-full md:w-9/12 mx-auto'>
            <button className='px-8 py-3 mb-16 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Edit Profile</button>
        </div>
    </div>
    
  )
}

export default Profile

