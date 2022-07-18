import axios from 'axios';
import { useEffect } from 'react';
import  {useState} from 'react';



const People = props => {
    const [starWars,setStarWars] = useState(null);
    const [inputStarWars,setInputStarWars] = useState();
    //const {people} = useParams();
    

    useEffect(() =>{
        //axios gets the data
        axios.get("https://swapi.dev/api/people/" + starWars)
        //then what to do after it gets the data,function
        .then(res => setStarWars(res.data))
        
    },[starWars])

    const search = e => {
        e.preventDefault();
        
        setStarWars(inputStarWars);
    }
    
    
    return(
        <div>
            <h1>Luke Apiwalker</h1>
            
            <input type="number" name="newStarWars" onChange={(e)=>setInputStarWars(e.target.value)}/>
            <input type="submit" value="search" onclick={search}/>

            <h1>Star Wars character: {starWars.name}</h1>
            <h1>Height: {starWars.height}</h1>
            <h1>Hair Color: {starWars.hair_color}</h1>
            <h1>Skin Color: {starWars.skin_color}</h1>

        </div>
    )
}

export default People;

