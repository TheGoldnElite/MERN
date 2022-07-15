import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Contact = props => {
    const [name,setName] =useState("");
    const [comment,setComment] = useState("");
    const sendSurvey = e => {
        e.preventDefault();
        Navigate("/about");
    }

    return (
        <>
        <h2>contact page</h2>
        <form onSubmit={ sendSurvey }>
            <label>Your Name:</label>
            <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
            <label>Your Comment:</label>
            <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
            <input type="submit" value="Submit Survey" />
    </form>

        </>
    )
}

export default Contact;