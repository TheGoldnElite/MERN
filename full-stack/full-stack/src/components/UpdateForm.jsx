import {useState} from "react";
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';


const AddForm = props => {
    const {_id} = useParams();
    const navigate =useNavigate
    const[form,setForm] = useState({
        title:"",
        art:"",
        minPlayers:1
    });

    useEffect (() => {
        axios.get("http://localhost:8000/api/games/update" + _id)
            .then(res => setForm(res.date[0]))
            .catch(err => console.log(err))
    })

    const[errors,setErrors] =useState({});

    const onChangeHandler = e => {
        setForm({...form,[e.target.name]:e.target.value})
    }



    const formHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/games/create", form)
            .then(res => {
                //we did it wrong
                if(res.data.error){
                    console.log("something went wrong")
                    console.log(res.data.error)
                
                } else {
                    //we did it right
                    console.log("this is right")
                    navigate("/");
                }
            })
            .catch(err => console.log(err))

    }

    return(
        <div>
            <h2>add game</h2>

            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={form.title} onChange={onChangeHandler}/>
                    {errors.title ? <span>{errors.title.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="art">Cover Art</label>
                    <input type="text" name="art" value={form.art} onChange={onChangeHandler}/>
                    {errors.title ? <span>{errors.art.message}</span>: ""}
                </div>
                <div>
                    <label htmlFor="minPlayers">Min # of Players:</label>
                    <input type="number" name="minPlayers" value={form.minPlayers} onChange={onChangeHandler}/>
                    {errors.title ? <span>{errors.minPlayers.message}</span>: ""}
                </div>
                <input type="submit" value="submit"/>
                
            </form>
        </div>
    )
}