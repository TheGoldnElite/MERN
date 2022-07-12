import {useState} from 'react';


import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [allCharacters,setAllCharacter] = useState([]);
  const addChar = person =>{
    //not push, we are spreading instead
    setAllCharacter([...allCharacters,person]);
  }
  const lifeHandler = (index) => {
    allCharacters[index].IsAlive = !allCharacters[index].IsAlive;
    setAllCharacter([...allCharacters])
    console.log("Character clicked", index)
  }
  return (
    <div className="App">
      
      <Form newChar ={addChar}/>
      <Results allChars={allCharacters} toggleLife={lifeHandler}/>
    </div>
  );
}

export default App;
