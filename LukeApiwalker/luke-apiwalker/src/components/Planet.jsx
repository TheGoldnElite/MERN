import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import  {useState} from 'react';



function Planets ({id}) {
    const [planets,setPlanets] = useState(null);
    
    //const {people} = useParams();
    

    useEffect(() =>{
        //axios gets the data
        axios.get("https://swapi.dev/api/Planets/" + id  )
        //then what to do after it gets the data,function
        .then(res => setPlanets(res.data));
    
        
    },[id])

    if (planets == null){
        return "Loading.";
    }
    
    
    
    return(
        <div>
            <h1>Luke Apiwalker</h1>
            <p>Planet page</p>
            

            <p>Planet: {planets.name}</p>
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface}</p>
            <p>Population: {planets.population}</p>

        </div>
    )
};

export default Planets;

