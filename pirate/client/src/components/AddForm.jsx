import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddForm = props => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        name:"",
        image:"",
        chest:1,
        phrase:"",
        position:"Captain"
    });
    const [errors,setErrors] = useState({});
    const onChangeHandler = e => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirates/create",form)
            .then(res => {
            
                //we did it wrong
                if(res.data.error){
                    console.log("something went wrong")
                    setErrors(res.data.error.errors)
                } else {
                    //we did it right
                    console.log("right")
                    navigate("/");
                }
                
            })
            .catch(err => console.log(err))
    }

    
    return(
        <div>
            <Link to = {"/"}><button>Crew Board</button></Link>
            <h1>Add Pirate</h1>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="name">Pirate Name:</label>
                    <input type="text" name="name" value={form.name} onChange={onChangeHandler}/>
                    {errors.name ? <span>{errors.name.message}</span>: ""} 
                </div>
                <div>
                    <label htmlFor="image">Image Url:</label>
                    <input type="text" name="image" value={form.image} onChange={onChangeHandler}/>
                    {errors.image ? <span>{errors.image.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="chest"># of Treasure Chests:</label>
                    <input type="number" name="chest" value={form.chest} onChange={onChangeHandler}/>
                    {errors.chest ? <span>{errors.chest.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="phrase">Pirate Catch Phrase:</label>
                    <input type="text" name="phrase" value={form.phrase} onChange={onChangeHandler}/>
                    {errors.phrase ? <span>{errors.phrase.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="position">Crew Position:</label>
                    <select name="position" value={form.position} onChange={onChangeHandler}>
                        <option value="Captain">Captain</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    {errors.position ? <span>{errors.postion.message}</span>: ""}
                </div>
                <div>
                    <input type="submit" value="Add Pirate"/>
                </div>


            </form>
        </div>
    )
}



export default AddForm;