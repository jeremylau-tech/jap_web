import React from 'react';
import JobCard from '../components/JobListingEmployer/JobCard';
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