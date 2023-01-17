import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import JobDetails from './pages/JobDetails';
import JobListing from './pages/JobListing';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/SignUp' element ={<SignUp />} />
          <Route path='/JobDetails' element ={<JobDetails />} />
          <Route path='/JobListing' element ={<JobListing />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;





    
  