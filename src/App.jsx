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
import JobListing from './pages/JobListing';
import CandidateProfile from './pages/CandidateProfile';
import EmployerProfile from './pages/EmployerProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <EmployerAuthContextProvider>
      <AuthContextProvider>
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/SignInCandidate' element ={<SignInCandidate />} />
          <Route path='/SignUpCandidate' element ={<SignUpCandidate /> } />
          <Route path='/SignInEmployer' element ={<SignInEmployer />} />
          <Route path='/SignUpEmployer' element ={<SignUpEmployer /> } />
          <Route path='/CandidateInfo' element ={<CandidateInfo /> } />
          <Route path='/JobListing' element ={<JobListing /> } />
          <Route path='/NewJob' element ={<NewJob /> } />
          <Route path='/EmployerInfo' element ={<EmployerInfo />} />
          <Route 
            path='/CandidateHome' 
            element ={
              <ProtectedRoute>
                <CandidateHome />
              </ProtectedRoute>
            } />
          <Route path='/EmployerHome' element ={<EmployerHome />} />
          <Route path='/CandidateProfile' element ={<CandidateProfile />} />
          <Route path='/EmployerProfile' element ={<EmployerProfile />} />
          <Route path='/JobForm' element ={<CreateJobForm />} />

          
        </Routes>
      </AuthContextProvider>
      </EmployerAuthContextProvider>
    </div>
  );
}

export default App;






    
  