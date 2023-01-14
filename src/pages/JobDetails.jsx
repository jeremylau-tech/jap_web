import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contents from '../components/JobDetails/Contents';

function JobDetails() {
  return (
    <div>
        <Navbar/>
        <Contents/>
        <Footer/>
    </div>
  )
}

export default JobDetails