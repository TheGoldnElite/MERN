import {useEffect,useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";



const ViewAll = props => {
    const [pirates,setPirate] = useState(null);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirate(res.data))
            .catch(err => console.log(err))
    },[])
    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/pirates/delete/" +id)
            .then(() => console.log("pirate deleted")
            .catch(err => console.log("issue deleting the pirate", err))
    }


    return(
        <div>
            <Link to = {`/new`}><button>Add pirate</button></Link>
            <h1>Pirate Crew</h1>
            <div className="flex">
        {
            pirates ? pirates.map((item,i) => <div key={i} className="card">
                <h2>{item.name}</h2>
                <img src={item.image} alt="image"/>
                <Link to={`/pirate/${item._id}`}><button>View Pirate</button></Link>
                <button onClick={() => handleDelete(item._id)}>Walk the Plank</button>
                
            </div>) : ""
        }

        </div>
        </div>
        
    );
}



export default ViewAll;