import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { EmployerAuthContextProvider } from './contexts/EmployerAuthContext';
import Home from './pages/Home';
import SignInCandidate from './pages/SignInCandidate';
import SignUpCandidate from './pages/SignUpCandidate';
import SignInEmployer from './pages/SignInEmployer';
import SignUpEmployer from './pages/SignUpEmployer';
import CandidateInfo from './pages/CandidateInfo';
import EmployerInfo from './pages/EmployerInfo';
import CandidateHome from './pages/CandidateHome';
import EmployerHome from './pages/EmployerHome';
import NewJob from './pages/NewJob';
import CreateJobForm from './pages/CreateJobForm';
import ApplyJobForm from './pages/ApplyJobForm';
import JobListing from './pages/JobListing';
import JobListingEmployer from './pages/JobListingEmployer';
import CandidateProfile from './pages/CandidateProfile';
import CandidateProfileEmployer from './pages/CandidateProfileEmployer';
import EmployerProfile from './pages/EmployerProfile';
import ApplicantListing from './pages/ApplicantListing';
import EditCandidateProfile from './pages/EditCandidateProfile';
import EditEmployerProfile from './pages/EditEmployerProfile';

function App() {
  return (
    <div className="App">
      <EmployerAuthContextProvider>
      <AuthContextProvider>
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/SignInCandidate' element ={<SignInCandidate />} />
          <Route path='/ApplicantListing' element ={<ApplicantListing />} />
          <Route path='/SignUpCandidate' element ={<SignUpCandidate /> } />
          <Route path='/SignInEmployer' element ={<SignInEmployer />} />
          <Route path='/SignUpEmployer' element ={<SignUpEmployer /> } />
          <Route path='/CandidateInfo' element ={<CandidateInfo /> } />
          <Route path='/JobListing' element ={<JobListing /> } />
          <Route path='/JobListingEmployer' element ={<JobListingEmployer /> } />
          <Route path='/NewJob' element ={<NewJob /> } />
          <Route path='/EmployerInfo' element ={<EmployerInfo />} />
          <Route path='/ApplyJobForm' element ={<ApplyJobForm />} />
          <Route path='/CreateJobForm' element ={<CreateJobForm />} />
          <Route path='/CandidateHome' element ={<CandidateHome />} />
          <Route path='/EmployerHome' element ={<EmployerHome />} />
          <Route path='/CandidateProfile' element ={<CandidateProfile />} />
          <Route path='/CandidateProfileEmployer' element ={<CandidateProfileEmployer />} />
          <Route path='/EmployerProfile' element ={<EmployerProfile />} />
          <Route path='/EditCandidateProfile' element ={<EditCandidateProfile />} />
          <Route path='/EditEmployerProfile' element ={<EditEmployerProfile/>} />

          
        </Routes>
      </AuthContextProvider>
      </EmployerAuthContextProvider>
    </div>
  );
}

export default App;