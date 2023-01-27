import React, { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../../utils/init-firebase';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

function JobForm() {
	const [title, setTitle] = useState('');
	const [email, setEmail] = useState('');
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
	const [company, setCompany] = useState('');

	const navigate = useNavigate();
    const toast = useToast();

	const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            const docRef = doc(db, "job", title);
			console.log(docRef); 
			await setDoc(docRef, {
                company : company, 
  				title : title,
  				email : email,
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
            toast({
                status: 'success',
                description: "Successfully create the Job!"
            })
			navigate('/EmployerHome');
            localStorage.setItem('title', title);

        } catch (e) {
            setError('Failed to create the Job!');
			toast({
                status: 'error',
                description: "Failed to create the Job!"
            }) 
            console.log(e.message)
        }
    }
    
    const emailRef = localStorage.getItem('jap-email');

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = async () => {
            const email = localStorage.getItem('jap-email');
            const docRef = doc(db, "employer", email);
            console.log(docRef)

            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setProfile({...docSnap.data()})

            } else {
                console.log("No such document!");
            }
        };
        getProfile();
    }, [])


	return (
    <section className="p-6">
        <h2 className='text-xl md:text-2xl lg:3xl font-projectFont font-bold text-center text-orange mt-24 mb-8'>Create A Job</h2>
        <form onSubmit={handleSubmit} 
				novalidate="" action="" 
				className="container flex flex-col items-center mx-auto font-projectFont space-y-12 ng-untouched ng-pristine ng-valid content-center">
		    <fieldset className="flex gap-6 p-6 rounded-lg shadow-2xl text-black items-center justify-center content-center">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 justify-center items-center content-center">
				
                <div className="col-span-full sm:col-span-3">
                    <label for="company" className="font-projectFont font-medium text-sm">Company*</label>
                    <select onChange={(e) => setCompany(e.target.value)} id="company"  placeholder="Name" className="w-full p-2 font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" required >
					<option disabled selected>Select</option>
                        <option>{profile.companyName}</option>
                    </select>
                </div>


                <div className="col-span-full sm:col-span-3">
                    <label for="email" className="font-projectFont font-medium text-sm">Email*</label>
                    <select onChange={(e) => setEmail(e.target.value)} id="emailRef" type="text" placeholder="Email Confirmation" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" required >
					<option disabled selected>Select</option>
                        <option>{emailRef}</option>
                    </select>
                </div>

        
                <div className="col-span-full sm:col-span-3">
					<label for="title" className="font-projectFont font-medium text-sm">Job Title*</label>
					<input onChange={(e) => setTitle(e.target.value)} id="title" type="text" placeholder="Title" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
				</div>


				<div className="col-span-full sm:col-span-3">
					<label for="location" className="font-projectFont font-medium text-sm">Location*</label>
					<select onChange={(e) => setLocation(e.target.value)} id="last-name" type="text" placeholder="Location" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
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
				<div className="col-span-full sm:col-span-3">
					<label for="type" className="font-projectFont font-medium text-sm">Job Type*</label>
                    <select onChange={(e) => setType(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Internship</option>
                        <option>Full Time</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="cgpa" className="font-projectFont font-medium text-sm">CGPA*</label>
                    <select onChange={(e) => setCgpa(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>3.80 - 4.00</option>
                        <option>3.50 - 3.80</option>
						<option>3.20 - 3.50</option>
                        <option>3.00 - 3.20</option>
						<option>2.80 - 3.00</option>
                        <option>2.50 - 2.80</option>
                        <option>2.00 - 2.50</option>
                        <option>1.50 - 2.00</option>
                        <option>1.00 - 1.50</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="level" className="font-projectFont font-medium text-sm">Education Level</label>
                    <select onChange={(e) => setLevel(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>PHD</option>
                        <option>Master</option>
                        <option>Bachelor Degree</option>
                        <option>Diploma</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="techStack" className="font-projectFont font-medium text-sm">Preferred Tech Stack</label>
                    <select onChange={(e) => setTechStack(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>LAMP: Linux, Apache, MySQL, PHP</option>
                        <option>MEAN: MongoDB, Express.js, AngularJS, Node.js</option>
                        <option>MERN: MongoDB, Express.js, ReactJS, Node.js</option>
                        <option>MEVN: MongoDB, Express.js,VueJS, Node.js</option>
                        <option>Ruby on Rails: Ruby, Rails, Rack, Passenger</option>
                        <option>.NET: .NET, MS SQL Server</option>
                        <option>Java: Java, MySQL</option>
                        <option>ASP.net: ASP.NET MVC, IIS, Microsoft Azure, SQL Server</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="prototype" className="font-projectFont font-medium text-sm">Prototyping Tool</label>
                    <select onChange={(e) => setPrototype(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Figma</option>
                        <option>Adobe XD</option>
                        <option>InVision Studio</option>
                        <option>Webflow</option>
                        <option>Axure RP</option>
                        <option>Origami Studio</option>
                        <option>Justinmind</option>
                        <option>Sketch</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="editor" className="font-projectFont font-medium text-sm">Code Editor</label>
                    <select onChange={(e) => setEditor(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Visual Studio Code</option>
                        <option>Atom</option>
                        <option>NetBeans</option>
                        <option>Notepad++</option>
                        <option>Webuilder</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="dataScience" className="font-projectFont font-medium text-sm">Data Science</label>
                    <select onChange={(e) => setDataScience(e.target.value)} className="w-full p-2 font-projectFont text-base bg-white border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400">
                        <option disabled selected>Select</option>
                        <option>Python</option>
                        <option>PyTorch</option>
                        <option>OpenCV</option>
                        <option>ONNX</option>
                    </select>
				</div>
	
				<div className="col-span-full sm:col-span-3 flex flex-col space-y-1">
					<label for="infrastructure" className="font-projectFont font-medium text-sm">Infrastructure</label>
					<select onChange={(e) => setInfrastructure(e.target.value)} id="infrastructure" type="text" placeholder="Infrastructure" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400">
					<option disabled selected>Select</option>
                        <option>Amazon Web Services</option>
                        <option>Microsoft Azure</option>
                        <option>Google Cloud Services</option>
                    </select>
				</div>

				<div className="col-span-full sm:col-span-3">
					<label for="description" className="font-projectFont font-medium text-sm">Job Description (Write in a paragraph)*</label>
					<textarea onChange={(e) => setDescription(e.target.value)} id="description" type="text" placeholder="Job Description" className="w-full font-projectFont rounded-md focus:ring focus:ring-opacity-75 focus:ring-orange-400" />
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

export default JobForm;


