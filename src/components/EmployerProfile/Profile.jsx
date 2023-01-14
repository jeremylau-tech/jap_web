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
        <div class="w-full md:w-9/12 mx-auto pt-6 justify-center"> 
            <div class="p-6 shadow-xl rounded-md">
                <div class="flex items-center space-x-2 font-semibold leading-8">
                    <MdOutlineDescription size={22} className='text-orange' />
                    <span className="tracking-wide font-bold font-projectFont text-orange">About</span>
                </div>
                <div class="text-black font-projectFont">
                    <div class="grid md:grid-cols-2 text-sm">
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Company Name</div>
                            <div class="px-4 py-2">Mailo Sdn. Bhd.</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Industry</div>
                            <div class="px-4 py-2">IT</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Company Size</div>
                            <div class="px-4 py-2">company size</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Founded</div>
                            <div class="px-4 py-2">2020</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Website</div>
                            <div class="px-4 py-2">www.facebook.com</div>
                        </div>
                        <div class="grid grid-cols-2">
                            <div class="px-4 py-2 font-semibold">Email</div>
                            <div class="px-4 py-2">
                                <a class="text-blue-200" href="mailto:jane@example.com">jane@example.com</a>
                            </div>
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

