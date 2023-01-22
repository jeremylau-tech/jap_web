import React, { useState, useEffect } from 'react'
import { db } from '../../utils/init-firebase'
import { collection, getDocs, doc, setDoc, getDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

function JobForm() {
    const [job, setJob] = useState([]);
    const candidateColectionRef = collection(db, "job");

    const [title, setTitle] = useState('');
	const [location, setLocation] = useState('');
	const [type, setType] = useState('');
	const [cgpa, setCgpa] = useState('');
	const [level, setLevel] = useState('');
	const [techStack, setTechStack] = useState('');
	const [prototype, setPrototype] = useState('');
	const [editor, setEditor] = useState('');
	const [dataScience, setDataScience] = useState('');
	const [infrastructure, setInfrastructure] = useState('');
	const [description, setDescription] = useState('');
	const [error, setError] = useState('');

    const navigate = useNavigate();

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            // const title = localStorage.getItem('jap-email');
            const docRef = doc(db, "job1", title);
			console.log(docRef); 
			await setDoc(docRef, {
  				title : title,
                location : location,
				type : type,
				cgpa : cgpa,
				level : level,
				techStack : techStack,
				prototype : prototype,
				editor : editor, 
				dataScience : dataScience,
				infrastructure : infrastructure,
				description : description,
			});
			navigate('/EmployerHome');
            localStorage.setItem('title', title);

        } catch (e) {
            setError('Failed to create a job')
            console.log(e.message)
        }
    }

    
    useEffect(() => {
    const getJob = async () => {
        const data = await getDocs(candidateColectionRef);
        setJob(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        
        const title = localStorage.getItem('jap-title');
            const docRef = doc(db, "job", title);
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
    

    }, [])

	return(

    <div className='min-h-screen'>
    <div className="w-full md:w-9/12 mx-auto pt-6 justify-center"> 

    { job.map((doc) => {

    return(
    
    <div key={doc.id}>
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-blue mt-24 mb-8'>Job Application : {doc.title}</h2>
        <form onSubmit={handleSubmit} 
				novalidate="" action="" 
				className="container flex flex-col items-center mx-auto font-projectFont space-y-12 ng-untouched ng-pristine ng-valid content-center">
		    <fieldset className="flex gap-6 p-6 rounded-lg shadow-2xl text-black items-center justify-center content-center">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center items-center content-center">
                <div className="col-span-full sm:col-span-3">
					<label for="type" className="font-projectFont font-medium text-sm">Do you accept the work type: {doc.type}</label>
                    <select onChange={(e) => setType(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="cgpa" className="font-projectFont font-medium text-sm">Does your CGPA fulfill {doc.cgpa} and above?</label>
                    <select onChange={(e) => setCgpa(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="level" className="font-projectFont font-medium text-sm">Does your education background fulfill {doc.level} and above?</label>
                    <select onChange={(e) => setLevel(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="techStack" className="font-projectFont font-medium text-sm">Are you experienced in {doc.techStack}?</label>
                    <select onChange={(e) => setTechStack(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="prototype" className="font-projectFont font-medium text-sm">Are you experienced in {doc.prototype}?</label>
                    <select onChange={(e) => setPrototype(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="editor" className="font-projectFont font-medium text-sm">Are you experienced in {doc.editor}</label>
                    <select onChange={(e) => setEditor(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="dataScience" className="font-projectFont font-medium text-sm">Are you experienced in {doc.dataScience}?</label>
                    <select onChange={(e) => setDataScience(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400">
                        <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>
	
				<div className="col-span-full sm:col-span-3 flex flex-col space-y-1">
					<label for="infrastructure" className="font-projectFont font-medium text-sm">Are you experienced in {doc.infrastructure}?</label>
					<select onChange={(e) => setInfrastructure(e.target.value)} id="infrastructure" type="text" placeholder="Infrastructure" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400">
					    <option disabled selected>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="description" className="font-projectFont font-medium text-sm">Job Description of {doc.title}</label>
                    <div>
                    <h5 className='font-projectFont font-medium text-sm'>{doc.description}</h5>
                    </div>
				</div>

				</div>
				</fieldset>

			<div className='space-y-2 col-span-full lg:col-span-1  mt-8 '>
            <button className='px-8 py-3 mb-8 rounded-lg border font-projectFont text-base font-medium bg-blue text-white hover:bg-blue-500 hover:scale-105 active:bg-blue-200'>Save</button>
        </div>
	    </form>
        
    </section>
    </div>
       );

       
    })}
    </div>
    </div>
  )
}

export default JobForm;


