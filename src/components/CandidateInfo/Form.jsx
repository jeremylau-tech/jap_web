import React, { useState } from 'react'
import { TiUser } from 'react-icons/ti';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../../utils/init-firebase';
import { useNavigate } from 'react-router-dom';

function Form() {
	const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [university, setUniversity] = useState('');
	const [qualification, setQualification] = useState('');
	const [fieldStudy, setFieldStudy] = useState('');
	const [error, setError] = useState('');
	// const [email, setEmail] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            const email = localStorage.getItem('jap-email');
            const docRef = doc(db, "candidate", email);
			console.log(docRef)
			await updateDoc(docRef, {
  				firstName : firstName,
				lastName : lastName,
				gender : gender,
				contactNumber : contactNumber,
				country : country,
				state : state,
				city : city,
				university : university,
				qualification : qualification,
				fieldStudy : fieldStudy,
			});
			navigate('/CandidateHome');
        } catch (e) {
            setError('Failed to save the profile')
            console.log(e.message)
        }
    }

	return (
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-blue mt-24 mb-8'>Let your profile work for you</h2>
        <form onSubmit={handleSubmit} 
				novalidate="" action="" 
				className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
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
					<input onChange={(e) => setFirstName(e.target.value)} id="first-name" type="text" placeholder="First name" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="last-name" className="font-projectFont font-medium text-sm">Last Name</label>
					<input onChange={(e) => setLastName(e.target.value)} id="last-name" type="text" placeholder="Last name" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="qualification" className="font-projectFont font-medium text-sm">Gender</label>
                    <select onChange={(e) => setGender(e.target.value)} className="w-full p-2 font-projectFont text-[#64748b] text-base bg-white border rounded-md shadow-sm border-blue">
                        <option disabled selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="contact" className="font-projectFont font-medium text-sm">Contact Number</label>
					<input onChange={(e) => setContactNumber(e.target.value)} id="contact" type="text" placeholder="with country code (60123456789)" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="country" className="font-projectFont font-medium text-sm">Country</label>
					<input onChange={(e) => setCountry(e.target.value)} id="country" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="state" className="font-projectFont font-medium text-sm">State</label>
					<input onChange={(e) => setState(e.target.value)} id="state" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label for="city" className="font-projectFont font-medium text-sm">City</label>
					<input onChange={(e) => setCity(e.target.value)} id="city" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
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
					<input onChange={(e) => setUniversity(e.target.value)} id="university" type="text" placeholder="University / Institute name" className="w-full font-projectFont rounded-md border-blue" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="qualification" className="font-projectFont font-medium text-sm">Qualification</label>
                    <select onChange={(e) => setQualification(e.target.value)} className="w-full p-2 font-projectFont text-[#64748b] text-base bg-white border rounded-md shadow-sm border-blue">
                        <option disabled selected>Qualification</option>
                        <option>SPM, O-Level or equivalent</option>
                        <option>STPM, Foundation or equivalent</option>
                        <option>Diploma or equivalent</option>
                        <option>Bachelor's Degree</option>
                        <option>Post Graduate Degree</option>
                        <option>Professional Degree</option>
                        <option>Master's Degree</option>
                        <option>Doctorate (PhD)</option>
                    </select>
				</div>
                <div className="col-span-full sm:col-span-3">
					<label for="fieldStudy" className="font-projectFont font-medium text-sm">Field of Study</label>
					<input onChange={(e) => setFieldStudy(e.target.value)} id="fieldStudy" type="text" placeholder="" className="w-full font-projectFont rounded-md border-blue" />
				</div>
			</div>
		    </fieldset>
			<div className='space-y-2 col-span-full lg:col-span-1  mt-8 '>
            <button className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Save</button>
        </div>
	    </form>
        

</section>

  )
}

export default Form


