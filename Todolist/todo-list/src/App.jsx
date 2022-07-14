
import './App.css';
import React, {useState} from "react";
import Todo from "./components/Todo"

function App() {
  
    const [newTodo,setNewTodo] = useState("");
    const [todos,setTodos] = useState([]);



    const handleNewTodoSubmit = (event) => {
      event.preventDefault();

      if (newTodo.length === 0){
        return;
      }

      const todoItem ={
        text: newTodo,
        complete:false
      }
      
      //setTodos and pass in a brand new array containing all current todos plus 1 more
      setTodos([...todos,todoItem]);
      setNewTodo("");
    };

    const Delete = (index) => {
      const filtered = todos.filter((todo,i) =>{
        return i!== index;
    });
    setTodos(filtered);
  }

  const toggle = (index) => {
    const updated = todos.map((todo,i) => {
      if(index === i){
        todo.complete = !todo.complete;
        //const update = {...todo,complete:!todo.complete};
        //return update;
      }

      return todo;
    });
    setNewTodo(updated);
  }

    return (
    <div className="App">
        <form onSubmit={(event) => {
          handleNewTodoSubmit(event);
        }}>
          <input onChange = {(event) => {
            setNewTodo(event.target.value);
          }} type="text" value={newTodo}/>
          <div>
            <button>
              Add
            </button>
          </div>
        </form>

        {todos.map((todo,i) => {
            
        return ( <Todo key = {i} todo={todo}
          toggle={toggle} 
          Delete={Delete}/>
        );
        })}
        
      
    </div>
  );
}

export default App;
