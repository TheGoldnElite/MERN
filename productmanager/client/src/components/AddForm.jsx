import {useState} from "react";
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';

const AddForm = props => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        title:"",
        price:"",
        description:""
    });
    const [errors,setErrors] = useState({});
    const onChangeHandler = e => {
setForm({...form,[e.target.name]:e.target.value})
    }
    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/create",form)
            .then(res =>{
                if(res.date.error){
                console.log("went wrong")
                setErrors(res.data.error.errors)
            } else{
                console.log("we made it")
                navigate("/");
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit = {formHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type ="text" name="title" onChange={onChangeHandler}/>

                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type ="text" name="price" onChange={onChangeHandler}/>

                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type ="text" name="description" onChange={onChangeHandler}/>

                </div>
                <div>
                    <input type="submit" value="Create"/>
                </div>
            </form>
        </div>

    );
}

export default AddForm;