import axios from 'axios';
import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';


const ViewOne = props => {
    const [onePirate,setOnePirate] = useState(null)
    const {_id} = useParams();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates/" + _id)
            .then(res => setOnePirate(res.data[0]))
            .catch(err => console.log(err))
    },[])
    return(
    
        <div>
            {
                onePirate ? <div>
                    <h1>{onePirate.name}</h1>
                    <img src={onePirate.image} alt="image"/>
                    <h2>{onePirate.phrase}</h2>
                    <h2>Position:{onePirate.position}</h2>
                    <h2>Treasures:{onePirate.chest}</h2>
                    <h2>Peg Leg: {onePirate.leg}</h2>
                    <h2>Eye Patch: {onePirate.eye}</h2>
                    <h2>Hook Hand: {onePirate.hand}</h2>
                </div> : ""
            

            }
        </div>
        
        

    )
}



export default ViewOne;



const handleDelete = id => {
    axios.delete("http://localhost:8000/api/pets/delete/" + id)
        .then(() => console.log("pet adopted")
        )
        .catch(err => console.log("issue adopting pet",err))
}