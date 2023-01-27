import React, { useState } from 'react'
import { HiBuildingOffice } from 'react-icons/hi2';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../utils/init-firebase';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

function Form() {
	const [companyName, setCompanyName] = useState('');
	const [industry, setIndustry] = useState('');
	const [companySize, setCompanySize] = useState('');
	const [founded, setFounded] = useState('');
	const [companyWebsite, setCompanyWebsite] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const toast = useToast();

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            const email = localStorage.getItem('jap-email');
            const docRef = doc(db, "employer", email);
			console.log(docRef)
			await updateDoc(docRef, {
  				companyName : companyName,
				industry : industry,
				companySize : companySize,
				founded : founded,
				companyWebsite : companyWebsite,
				country : country,
				state : state,
				city : city,
			});
			toast({
                status: 'success',
                description: "Successfully save the profile details!"
            }) 
			navigate('/EmployerHome');
        } catch (e) {
            setError('Failed to save the profile details!');
			toast({
                status: 'error',
                description: "Failed to save the profile details!"
            }) 
            console.log(e.message)
        }
    }

	return (
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-orange mt-24 mb-8'>Tell us about your company</h2>
        <form onSubmit={handleSubmit} 
			novalidate="" action="" className="container flex flex-col mx-auto font-projectFont space-y-12 ng-untouched ng-pristine ng-valid">
		    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-lg shadow-xl text-black">	
			<div className="space-y-2 col-span-full lg:col-span-1">
				<div className="avatar placeholder pr-28">
  					<div className="bg-neutral-focus text-neutral-content rounded-full w-24">
						<HiBuildingOffice size={50} />
  					</div>
				</div> 
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center text-black">
				<div className="col-span-full">
					<label for="company-name" className="font-projectFont font-medium text-sm">Company Name</label>
					<input onChange={(e) => setCompanyName(e.target.value)} id="company-name" type="text" placeholder="Example Sdn. Bhd." className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="company-industry" className="font-projectFont font-medium text-sm">Industry</label>
                    <select onChange={(e) => setIndustry(e.target.value)} id="company-instry" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400 ">
                        <option disabled selected>Industry</option>
                        <option>Electronics Manufacturing</option>
                        <option>Semiconductors</option>
                        <option>Microchips</option>
                        <option>Integrated Circuits</option>
                        <option>Telecommunications Services</option>
                        <option>Computer Hardware Development</option>
                        <option>Enterprise Software & Network Solutions</option>
                        <option>Internet & Web Services</option>
                        <option>Information Technology Support Sevices</option>
						<option>Biotech & Pharmaceuticals</option>
						<option>Cybersecurity Consulting</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="company-size" className="font-projectFont font-medium text-sm">Company Size</label>
                    <select onChange={(e) => setCompanySize(e.target.value)} id="company-size" className="w-full p-2 font-projectFont  text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Company Size</option>
                        <option>1 - 50 employees</option>
                        <option>51 - 100 employees</option>
                        <option>101 - 500 employees</option>
                        <option>501 - 1000 employees</option>
                        <option>1001 - 5000 employees</option>
                        <option>above 5000 employees</option>
                        <option>above 10000 employees</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="founded" className="font-projectFont font-medium text-sm">Founded</label>
					<input onChange={(e) => setFounded(e.target.value)} id="founded" type="month" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400"/>	
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="company-website" className="font-projectFont font-medium text-sm">Company Website</label>
					<input onChange={(e) => setCompanyWebsite(e.target.value)} id="company-website" type="text" placeholder="www.company.com" className="w-full font-projectFont rounded-md  focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div> 
				<div className="col-span-full sm:col-span-2">
					<label for="company-country" className="font-projectFont font-medium text-sm">Country</label>
					<input onChange={(e) => setCountry(e.target.value)} id="company-country" type="text" placeholder="" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="company-state" className="font-projectFont font-medium text-sm">State</label>
					<input onChange={(e) => setState(e.target.value)} id="company-state" type="text" placeholder="" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="company-city" className="font-projectFont font-medium text-sm">City</label>
					<input onChange={(e) => setCity(e.target.value)} id="company-city" type="text" placeholder="" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>
			</div>
		    </fieldset>
			<div className='space-y-2 col-span-full lg:col-span-1  mt-8 '>
            	<button className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-orange text-white hover:bg-orange-500 hover:scale-105 active:bg-orange-200'>Save</button>
        	</div>
	    </form>
</section>

  )
}

export default Form


