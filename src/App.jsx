import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes> {/** outside Routes: display for all pages */}
          <Route path='/' element ={<Home />} />
          <Route path='/SignUp' element ={<SignUp />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;





    
  