const Todo = (props) => {
    const classLine = ("line");
    if(props.todo.complete){
        classLine.push("line");

}

    return (
        <div>
            <h1 className={classLine.join(" ")}>{props.todo.text}</h1>
            <button onClick={(event) => {
            props.Delete(props.i);
            }}> Delete</button>
            <input onChange ={(event) =>{
            props.toggle(props.i);
            }} checked={props.todo.complete} type="checkbox"/>
        </div>
        
    )
}

export default Todo;