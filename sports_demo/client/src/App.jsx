import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import ViewAll from './components/ViewAll';
import Create from './components/Create';
<Routes>
          <Route path="/" element={<ViewAll/>}/>
        </Routes>
function App() {
  return (
    <div>
      <h1>Sports Demo</h1>
        <ViewAll/>
        <Create/>
        
        
    </div>
  );
}

export default App;
