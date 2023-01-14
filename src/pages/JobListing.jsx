import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/JobListing/Layout';

function JobListing() {
  return (
    <div>
        <Navbar/>
        <Layout/>
        <Footer/>
    </div>
  )
}

export default JobListing