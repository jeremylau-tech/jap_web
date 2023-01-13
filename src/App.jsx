import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInCandidate from './pages/SignInCandidate';
import SignUpCandidate from './pages/SignUpCandidate';
import SignInEmployer from './pages/SignInEmployer';
import SignUpEmployer from './pages/SignUpEmployer';
import CandidateInfo from './pages/CandidateInfo';
import EmployerInfo from './pages/EmployerInfo';
import CandidateHome from './pages/CandidateHome';
import EmployerHome from './pages/EmployerHome';
import CandidateProfile from './pages/CandidateProfile';
import EmployerProfile from './pages/EmployerProfile';

function App() {
  return (
    <div className="App">
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/SignInCandidate' element ={<SignInCandidate />} />
          <Route path='/SignUpCandidate' element ={<SignUpCandidate /> } />
          <Route path='/SignInEmployer' element ={<SignInEmployer />} />
          <Route path='/SignUpEmployer' element ={<SignUpEmployer /> } />
          <Route path='/CandidateInfo' element ={<CandidateInfo /> } />
          <Route path='/EmployerInfo' element ={<EmployerInfo />} />
          <Route path='/CandidateHome' element ={<CandidateHome />} />
          <Route path='/EmployerHome' element ={<EmployerHome />} />
          <Route path='/CandidateProfile' element ={<CandidateProfile />} />
          <Route path='/EmployerProfile' element ={<EmployerProfile />} />
        </Routes>
    </div>
  );
}

export default App;

/**
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NavBarCandidate from './components/NavBarCandidate';
import SignInCandidate from './pages/SignInCandidate';

function App() {
  return (
    <div className="App">
      <NavBarCandidate/>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/SignUp' element ={<SignUp />} />
      </Routes>
    <Footer />
  </div>
);
}

export default App;
 */





    
  