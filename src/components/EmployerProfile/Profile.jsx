import React from 'react'
import { HiBuildingOffice } from 'react-icons/hi2';
import { MdOutlineDescription } from 'react-icons/md'

function Profile() {
  return (
    <div className='min-h-screen'>
        <div className="flex justify-center avatar placeholder pt-28">
  				<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
					<HiBuildingOffice size={60} />
  				</div>
			</div>  
        <div className="w-full md:w-9/12 mx-auto pt-6 justify-center"> 
            <div className="p-6 shadow-xl rounded-md">
                <div className="flex items-center space-x-2 font-semibold leading-8">
                    <MdOutlineDescription size={22} className='text-orange' />
                    <span className="tracking-wide font-bold font-projectFont text-orange">About</span>
                </div>
                <div className="text-black font-projectFont">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Company Name</div>
                            <div className="px-4 py-2">Mailo Sdn. Bhd.</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Industry</div>
                            <div className="px-4 py-2">IT</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Company Size</div>
                            <div className="px-4 py-2">company size</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Founded</div>
                            <div className="px-4 py-2">2020</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Website</div>
                            <div className="px-4 py-2">www.facebook.com</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email</div>
                            <div className="px-4 py-2">
                                <a className="text-blue-200" href="mailto:jane@example.com">jane@example.com</a>
                            </div>
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
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-end mt-8 text-center w-full md:w-9/12 mx-auto'>
            <button className='px-8 py-3 mb-16 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-orange-500 hover:scale-105 active:bg-orange-200'>Edit Profile</button>
        </div>
    </div>
  )
}

export default Profile

