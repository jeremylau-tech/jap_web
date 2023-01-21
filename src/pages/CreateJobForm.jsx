import React from 'react';
import NavBarEmployer from '../components/NavBarEmployer';
import JobForm from '../components/CreateJobForm/JobForm';
import Footer from '../components/Footer';

function CreateJobForm(){
    return(
        <div>
            <NavBarEmployer/>
            <CreateJobForm/>
            <Footer/>
        </div>
    )
}

export default CreateJobForm;