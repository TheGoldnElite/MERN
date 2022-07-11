import React from 'react';
import './App.css';
import First from './components/MyNewComponent';






function App() {

  

  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" Age={45} hairColor="Black"/>

      <PersonCard firstName="John" lastName="Smith" Age={88} hairColor="Brown"/>

      <PersonCard firstName="Millard" lastName="Fillmore" Age={50} hairColor="Brown"/>

      <PersonCard firstName="Maria" lastName="Doe" Age={45} hairColor="Black"/>


    </div>
  );
}
export default App;