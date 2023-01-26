import React from 'react';
import JobCard from '../components/JobListing/JobCard';
import NavBarEmployer from '../components/NavBarEmployer'
import Footer from '../components/Footer';

function JobListing() {
  return (
    <div>
      <NavBarEmployer/>
      <JobCard/>
      <Footer/>
    </div>
  )
}

export default JobListing