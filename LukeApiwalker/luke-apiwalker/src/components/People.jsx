import axios from 'axios';
import { useEffect } from 'react';
import  {useState} from 'react';



function People ({id}) {
    const [people,setPeople] = useState(null);
    
    //const {people} = useParams();
    

    useEffect(() =>{
        //axios gets the data
        axios.get("https://swapi.dev/api/people/" + id + "/" )
        //then what to do after it gets the data,function
        .then(res => setPeople(res.data));
    
        
    },[id])

    if (people == null){
        return "Loading.";
    }
    
    
    
    return(
        <div>
            <h1>Luke Apiwalker</h1>
            <h1>People page</h1>
            

            <h1>Star Wars character: {people.name}</h1>
            <h1>Height: {people.height}</h1>
            <h1>Hair Color: {people.hair_color}</h1>
            <h1>Skin Color: {people.skin_color}</h1>

        </div>
    )
}

export default People;

