import React from 'react';
import './App.css';
import First from './components/MyNewComponent';






function App() {

  

  return (
    <div className="App">
      <First firstName="Jane" lastName="Doe" Age={45} hairColor="Black"/>

      <First firstName="John" lastName="Smith" Age={88} hairColor="Brown"/>

      <First firstName="Millard" lastName="Fillmore" Age={50} hairColor="Brown"/>

      <First firstName="Maria" lastName="Doe" Age={45} hairColor="Black"/>


    </div>
  );
}
export default App;