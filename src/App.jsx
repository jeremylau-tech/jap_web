import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NavBarCandidate from './components/NavBarCandidate';
import SignInCandidate from './pages/SignInCandidate';
import SignUpCandidate from './pages/SignUpCandidate';
import SignInEmployer from './pages/SignInEmployer';

function App() {
  return (
    <div className="App">
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/SignInCandidate' element ={<SignInCandidate />} />
          <Route path='/SignUpCandidate' element ={<SignUpCandidate /> } />
          <Route path='/SignInEmployer' element ={<SignInEmployer />} />
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
        <Route path='/' element ={<Home />} />
        <Route path='/SignUp' element ={<SignUp />} />
      </Routes>
    <Footer />
  </div>
);
}

export default App;
 */





    
  