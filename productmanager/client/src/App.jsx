import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/" element={<ViewAll/>}/>
        <Route path="/product/:_id" element={<ViewOne/>}/>
        <Route path="/update" element={<UpdateForm/>}/>
        <Route path="/add" element={<AddForm/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
