import logo from './logo.svg';
import './App.css';
import ViewAll from './components/ViewAll';
import {Routes,Route,Link} from 'react-router-dom';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <div className="App">
      <h3><Link to ={"/"}>Back to home</Link>|<Link to ={"/add"}>add a pet to the shelter</Link></h3>
      <h1>Pet Shelter</h1>
      <Routes>
        <Route path="/" element={<ViewAll/>}/>
        <Route path="/add" element={<AddForm/>}/>
        <Route path="/update/:_id" element={<UpdateForm/>}/>
        <Route path="/pet/:_id" element={<ViewOne/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
