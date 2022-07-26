import {useEffect,useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ViewAll = props => {
    const [pets,setPet] = useState(null);


    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPet(res.data))
            .catch(err => console.log(err))
    },[])


    return(
        <div>
            <h1>These pets are looking for a good home</h1>
            
            <div>
            {
            pets ? pets.map((item,i) => <div className="card" key={i}>
                <h2>{item.name}</h2>
                <h2>{item.type}</h2>
                <Link to={`/pet/${item._id}`}><button>Details</button></Link>
                <Link to ={`/update/${item._id}`}><button>Edit</button></Link>
            </div>) : ""
        }

        </div>
        </div>
        
    );
}



export default ViewAll;