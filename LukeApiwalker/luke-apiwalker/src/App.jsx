
import './App.css';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planet';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Luke Apiwalker</h1>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/People/:id" element={<People />} />
        <Route path="/Planets/:id" element={<Planets/>} />
        
      </Routes>
    </div>
  );
}

export default App;
