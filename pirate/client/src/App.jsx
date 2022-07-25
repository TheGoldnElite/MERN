import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';
import {Routes,Route} from 'react-router-dom'
import AddForm from './components/AddForm';
import ViewOne from './components/ViewOne';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewAll/>}/>
        <Route path="/new" element={<AddForm/>}/>
        <Route path="/pirate/:_id" element={<ViewOne/>}/>
        

      </Routes>
      
    </div>
  );
}

export default App;
