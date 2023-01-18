import React from 'react'


function Form() {
  return (
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-orange mt-24 mb-8'>Create New Job</h2>
        <form novalidate="" action="" className="container flex flex-col items-center mx-auto font-projectFont space-y-12 ng-untouched ng-pristine ng-valid">
		    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-lg shadow-xl text-black">	
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center">
				<div className="col-span-full sm:col-span-3">
					<label for="job-title" className="font-projectFont font-medium text-sm">Job Title</label>
					<input id="job-title" type="text" placeholder="Eg. IT Analyst" className="w-full justify-center font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400 " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="salary" className="font-projectFont font-medium text-sm">Salary (RM) </label>
					<input id="salary" type="number" placeholder="5000" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
                <div className="col-span-full sm:col-span-2">
					<label for="working-country" className="font-projectFont font-medium text-sm">Location: Country</label>
                    <select id="working-country" className="select-bordered w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Malaysia</option>
                        <option>Singapore</option>
                    </select>
                </div>
                <div className="col-span-full sm:col-span-2">
					<label for="working-state" className="font-projectFont font-medium text-sm">State</label>
                    <select id="working-state" className="select-bordered w-full max-w-xs font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Johor</option>
                        <option>Kelantan</option>
                        <option>Kedah</option>
                        <option>Kuala Lumpur</option>
                        <option>Labuan</option>
                        <option>Melaka</option>
                        <option>Negeri Sembilan</option>
                        <option>Pahang</option>
                        <option>Perlis</option>
                        <option>Pulau Pinang</option>
                        <option>Sabah</option>
                        <option>Sarawak</option>
                        <option>Selangor</option>
                        <option>Terengganu</option>
                    </select>
                </div>
                <div className="col-span-full sm:col-span-2">
					<label for="location-city" className="font-projectFont font-medium text-sm">City</label>
					<input id="location-city" type="text" placeholder="City" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="career-level" className="font-projectFont font-medium text-sm">Career Level</label>
					<select id="career-level" className=" select-bordered w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Non-executive</option>
                        <option>Entry level</option>
                        <option>Intermediate level</option>
                        <option>First level</option>
                        <option>Mid level</option>
                        <option>Top level</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="qualification" className="font-projectFont font-medium text-sm">Qualification</label>
					<select id="qualification" className="select-bordered w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>SPM, O-Level or equivalent</option>
                        <option>STPM, foundation or equivalent</option>
                        <option>Diploma or equivalent</option>
                        <option>Undergraduate Degree</option>
                        <option>Graduate Degree</option>
                        <option>Professional Degree</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="job-specification" className="font-projectFont font-medium text-sm">Job Specification</label>
					<input id="job-specification" type="text" placeholder="IT" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div> 
				<div className="col-span-full sm:col-span-3">
					<label for="job-type" className="font-projectFont font-medium text-sm">Job Type</label>
					<select id="job-type" className="select-bordered w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Temporary</option>
                        <option>Permanent</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-6">
					<label for="job-desc" className="font-projectFont font-medium text-sm">Job Description</label>
					<input id="job-desc" type="text" placeholder="Explain the details and requirements of the job..." className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				
			</div>
		    </fieldset>
	    </form>
        <div className='flex flex-row-reverse mt-8 m-auto text-center'>
            <button className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-orange-500 hover:scale-105 active:bg-orange-200'>Create</button>
        </div>
</section>

  )
}

export default Form