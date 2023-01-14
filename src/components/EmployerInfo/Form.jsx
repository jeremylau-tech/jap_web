import React from 'react'
import { HiBuildingOffice } from 'react-icons/hi2';


function Form() {
  return (
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-orange mt-24 mb-8'>Tell us about your company</h2>
        <form novalidate="" action="" className="container flex flex-col mx-auto font-projectFont space-y-12 ng-untouched ng-pristine ng-valid">
		    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-lg shadow-xl text-black">	
			<div className="space-y-2 col-span-full lg:col-span-1">
				<div className="avatar placeholder pr-28">
  					<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
						<HiBuildingOffice size={50} />
  					</div>
				</div> 
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center">
				<div className="col-span-full sm:col-span-3">
					<label for="company-name" className="font-projectFont font-medium text-sm">Company Name</label>
					<input id="company-name" type="text" placeholder="Example Sdn. Bhd." className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400 " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="company-industry" className="font-projectFont font-medium text-sm">Industry</label>
					<input id="company-industry" type="text" placeholder="Industry" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
                <div className="col-span-full sm:col-span-3">
					<label for="company-size" className="font-projectFont font-medium text-sm">Company Size</label>
					<input id="company-size" type="text" placeholder="Company size" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="founded" className="font-projectFont font-medium text-sm">Founded</label>
					<input id="founded" type="text" placeholder="Year" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="company-website" className="font-projectFont font-medium text-sm">Company Website</label>
					<input id="company-website" type="text" placeholder="www.company.com" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="company-email" className="font-projectFont font-medium text-sm">Company Email</label>
					<input id="company-email" type="email" placeholder="email@company.com" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div> 
				<div className="col-span-full sm:col-span-2">
					<label for="company-country" className="font-projectFont font-medium text-sm">Country</label>
					<input id="company-country" type="text" placeholder="" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="company-state" className="font-projectFont font-medium text-sm">State / Province</label>
					<input id="company-state" type="text" placeholder="" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="company-city" className="font-projectFont font-medium text-sm">City</label>
					<input id="company-city" type="text" placeholder="" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
			</div>
		    </fieldset>
	    </form>
        <div className='flex flex-row-reverse mt-8 m-auto text-center'>
            <button className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-orange-500 hover:scale-105 active:bg-orange-200'>Save</button>
        </div>
</section>

  )
}

export default Form


