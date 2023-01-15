import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import JobListing from './pages/JobListing';
import JobDetails from './pages/JobDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <JobDetails/>
  </BrowserRouter>
);

