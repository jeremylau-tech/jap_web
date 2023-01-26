import React, { useState, useEffect } from 'react'
import { db } from '../../utils/init-firebase'
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { TiUser } from 'react-icons/ti'
import { FiUser, FiBook } from 'react-icons/fi'

function JobForm() {

    const [job, setJob] = useState([]);
    const location = useLocation();
    const { from } = location.state;

    const emailRef = localStorage.getItem('jap-email');

    useEffect(() => {
        const getJob = async () => {
            const docRef = doc(db, "job", from);
            console.log(docRef)

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setJob({...docSnap.data()})

            } else {
                console.log("No such document!");
            }
        };
        getJob();
    }, [])

    const [title, setTitle] = useState('');
	// const [location, setLocation] = useState('');
	const [type, setType] = useState('');
	const [cgpa, setCgpa] = useState('');
	const [level, setLevel] = useState('');
	const [techStack, setTechStack] = useState('');
	const [prototype, setPrototype] = useState('');
	const [editor, setEditor] = useState('');
	const [dataScience, setDataScience] = useState('');
	const [infrastructure, setInfrastructure] = useState('');
	const [description, setDescription] = useState('');
	const [companyEmail, setCompanyEmail] = useState('');
	const [personalEmail, setPersonalEmail] = useState('');
	const [error, setError] = useState('');
    const [summation, setSummation] = useState(0);
    const [val, setVal] = useState(0);
    const [val2, setVal2] = useState(0);
    
    

    const navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            const docRef = doc(db, "application", personalEmail); //use email of the company as a point of filtration and reference
			console.log(docRef); 
			await setDoc(docRef, {
  				title : title,
                // location : location,
				type : type,
				cgpa : cgpa,
				level : level,
				techStack : techStack,
				prototype : prototype,
				editor : editor, 
				dataScience : dataScience,
				infrastructure : infrastructure,
				description : description,
                companyEmail : companyEmail,
                personalEmail: personalEmail,
                summation: summation,
                val:val,
                val2:val2,
			});
			navigate('/CandidateHome');
            localStorage.setItem('personalEmail', personalEmail);

        } catch (e) {
            setError('Failed to submit the application')
            console.log(e.message)
        }
    }
    
    function calculate() {
        var total = 0;
        total =  parseInt(type) + parseInt(cgpa) +  parseInt(level) + parseInt(techStack) + parseInt(prototype) + parseInt(editor) + parseInt(dataScience) + parseInt(infrastructure);
        setSummation(total);
    }

    function temp() {
        setVal(job.title);
    }

    function temp2() {
        setVal2(job.company);
    }

    function run(){
        calculate();
        temp();
        temp2();
    }

return (

    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-blue mt-24 mb-8'>Job Application : {job.title} @ {job.company}</h2>
        <form onSubmit={handleSubmit}
                novalidate="" action=""
                className="container flex flex-col items-center mx-auto font-projectFont space-y-12 ng-untouched ng-pristine ng-valid content-center">
            <fieldset className="flex gap-6 p-6 rounded-lg shadow-2xl text-black items-center justify-center content-center">
            <div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center items-center content-center">
               
                <div className="col-span-full sm:col-span-3">
                    <label for="personalEmail" className="font-projectFont font-medium text-sm">Email*</label>
                    <select onChange={(e) => setPersonalEmail(e.target.value)} id="personalEmail" type="text" placeholder="Email Confirmation" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400" required >
                    <option disabled selected>Select</option>
                        <option>{emailRef}</option>
                    </select>
                </div>

                <div className="col-span-full sm:col-span-3">
					<label for="type" className="font-projectFont font-medium text-sm">Do you accept the work type: {job.type}</label>
                    <select onChange={(e) => setType(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>
       
                <div className="col-span-full sm:col-span-3">
					<label for="cgpa" className="font-projectFont font-medium text-sm">Does your CGPA fulfill {job.cgpa} and above?</label>
                    <select onChange={(e) => setCgpa(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="level" className="font-projectFont font-medium text-sm">Does your education background fulfill {job.level} and above?</label>
                    <select onChange={(e) => setLevel(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="techStack" className="font-projectFont font-medium text-sm">Are you experienced in {job.techStack}?</label>
                    <select onChange={(e) => setTechStack(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="prototype" className="font-projectFont font-medium text-sm">Are you experienced in {job.prototype}?</label>
                    <select onChange={(e) => setPrototype(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="editor" className="font-projectFont font-medium text-sm">Are you experienced in {job.editor}</label>
                    <select onChange={(e) => setEditor(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="dataScience" className="font-projectFont font-medium text-sm">Are you experienced in {job.dataScience}?</label>
                    <select onChange={(e) => setDataScience(e.target.value)} type="number" className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
				</div>
	
				<div className="col-span-full sm:col-span-3 flex flex-col space-y-1">
					<label for="infrastructure" className="font-projectFont font-medium text-sm">Are you experienced in {job.infrastructure}?</label>
					<select onChange={(e) => setInfrastructure(e.target.value)} type="number" id="infrastructure" placeholder="Infrastructure" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400">
					    <option disabled selected>Select</option>
                        <option value ="1">Yes</option>
                        <option value ="0">No</option>
                    </select>
                    
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="description" className="font-projectFont font-medium text-sm">Job Description of {job.title}</label>
                    
                    <div>
                    <h5 className='font-projectFont font-medium text-sm'>{job.description}</h5>
                    </div>
				</div>

                    <br />
                
                </div>
                    
                    
                </div>

            </fieldset>
            <div className='space-y-2 col-span-full lg:col-span-1  mt-8 '>
                        <button onClick={run} className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Save</button>
                </div>

        </form>

</section>
    
  )
}

export default JobForm


