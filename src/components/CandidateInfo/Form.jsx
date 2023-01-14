import React from 'react'
import { TiUser } from 'react-icons/ti';

function Form() {
  return (
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-blue mt-24 mb-8'>Let your profile work for you</h2>
        <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-lg shadow-xl text-black">
			<div className="space-y-2 col-span-full lg:col-span-1 text-base">
				<div className="avatar placeholder pr-28">
  					<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
						<TiUser size={55} />
  					</div>
				</div> 
				<button type="button" className="font-projectFont px-4 py-2 border rounded-md">Change</button>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center">
				<div className="col-span-full sm:col-span-3">
					<label for="first-name" className="font-projectFont font-medium text-sm">First Name</label>
					<input id="first-name" type="text" placeholder="First name" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="last-name" className="font-projectFont font-medium text-sm">Last Name</label>
					<input id="last-name" type="text" placeholder="Last name" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="qualification" className="font-projectFont font-medium text-sm">Gender</label>
                    <select className="w-full p-2 font-projectFont text-[#64748b] text-base bg-white border rounded-md shadow-sm border-blue">
                        <option disabled selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="contact" className="font-projectFont font-medium text-sm">Contact Number</label>
					<input id="contact" type="text" placeholder="with country code (60123456789)" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full">
					<label for="email" className="font-projectFont font-medium text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="country" className="font-projectFont font-medium text-sm">Country</label>
					<input id="country" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="font-projectFont font-medium text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="font-projectFont font-medium text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
			</div>
		    </fieldset>
		    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-lg shadow-xl text-black">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-semibold font-projectFont text-blue">Education</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
					<label for="university" className="font-projectFont font-medium text-sm">University / Institute</label>
					<input id="university" type="text" placeholder="University / Institute name" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="qualification" className="font-projectFont font-medium text-sm">Qualification</label>
                    <select className="w-full p-2 font-projectFont text-[#64748b] text-base bg-white border rounded-md shadow-sm border-blue">
                        <option disabled selected>Qualification</option>
                        <option>Primary/Seconday school/SPM/"O" level</option>
                        <option>Higher Secondary/STPM/"A" level/Pre-U</option>
                        <option>Professional Certificate</option>
                        <option>Diploma</option>
                        <option>Bachelor's Degree</option>
                        <option>Post Graduate Diploma</option>
                        <option>Professional Degree</option>
                        <option>Master's Degree</option>
                        <option>Doctorate (PhD)</option>
                    </select>
				</div>
                <div className="col-span-full sm:col-span-3">
					<label for="studyField" className="font-projectFont font-medium text-sm">Field of Study</label>
					<input id="studyField" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
			</div>
		    </fieldset>
	    </form>
        <div className='flex flex-row-reverse mt-8 m-auto text-center'>
            <button className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Save</button>
        </div>

</section>

  )
}

export default Form


