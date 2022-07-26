import axios from 'axios';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const ViewOne = props => {
    const [update,setUpdate] = useState(false);
    const navigate = useNavigate();
    const [onePet,setOnePet] = useState(null)
    const {_id} = useParams();

    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/pets/delete/" + id)
        .then(() => navigate("/"))
            
            .catch(err => console.log("issue adopting pet",err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/" + _id)
            .then(res => setOnePet(res.data[0]))
            .catch(err => console.log(err))
    },[_id])
    return(
    
        <div>
            {
                onePet ? <div>
                    <button onClick={() => handleDelete(onePet._id)}>Adopt Pet</button>
                    <h1>Details about: {onePet.name}</h1>
                    <h2>Pet type:{onePet.type}</h2>
                    <h2>Skills: {onePet.skillone}</h2>
                    <h2>{onePet.skilltwo}</h2>
                    <h2>{onePet.skillthree}</h2>
                </div>:""
            }
            
        </div>
        
    );
}

export default ViewOne;