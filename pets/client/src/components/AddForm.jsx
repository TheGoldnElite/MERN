import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddForm = props => {
    const navigate = useNavigate();
    const [errors,setErrors] = useState({});
    const [form,setForm] = useState({
        name:"",
        type:"",
        description:"",
        skillone:"",
        skilltwo:"",
        skillthree:""
        
    });
    const onChangeHandler = e => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/create",form)
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
            <h1>Know a pet needing a home?</h1>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="name">Pet Name</label>
                    <input type="text" name="name" value={form.name} onChange={onChangeHandler}/>
                    {errors.name ? <span>{errors.name.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="type">Pet Type:</label>
                    <input type="text" name="type" value={form.type} onChange={onChangeHandler}/>
                    {errors.type ? <span>{errors.type.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="description">Pet Description:</label>
                    <input type="text" name="description" value={form.description} onChange={onChangeHandler}/>
                    {errors.description ? <span>{errors.description.message}</span>: ""}
                </div>
                
                <h2>Skills (optional)</h2>
                    <div>
                        <label htmlFor="skillone">Skills 1:</label>
                        <input type="text" name="skillone" value={form.skillone} onChange={onChangeHandler}/>
                        
                    </div>
                    <div>
                        <label htmlFor="skilltwo">Skills 2:</label>
                        <input type="text" name="skilltwo" value={form.skilltwo} onChange={onChangeHandler}/>

                    </div>
                    <div>
                        <label htmlFor="skillthree">Skills 3:</label>
                        <input type="text" name="skillthree" value={form.skillthree} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <input type="submit" value="Add Pet"/>
                    </div>
                    
                
                

            </form>

        </div>
        
    )
}

export default AddForm;