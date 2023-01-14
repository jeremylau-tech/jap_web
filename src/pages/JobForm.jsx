import React from 'react';
import NavBarEmployer from '../components/NavBarEmployer';
import Form from '../components/JobForm/Form';
import Footer from '../components/Footer';

function JobForm (){
    return(
        <div>
            <NavBarEmployer/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default JobForm;