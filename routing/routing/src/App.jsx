import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import {Routes,Route,Link} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
    <h1>home page</h1>
    
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cities" element={<Cities/>}/>
      </Routes>
    </div>
  );
}

export default App;
