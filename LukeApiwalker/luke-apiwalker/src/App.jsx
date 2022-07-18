import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Luke Apiwalker</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/People/:people" element={<People />} />
        <Route path="/Planet/:planet" element={<Planet />} />
      </Routes>
    </div>
  );
}

export default App;
