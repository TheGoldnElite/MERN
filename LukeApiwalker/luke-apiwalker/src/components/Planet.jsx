import axios from 'axios';
import { useEffect } from 'react';
import  {useState} from 'react';

import { useParams } from 'react-router-dom';


const Planet = props => {
    
    const {planet} = useParams();
    
    
    return(
        <div>
            <>
            
            {
                <>
                    <h1>Planet {planet.name}</h1>
                    <h1>Climate: {planet.climate}</h1>
                    <h1>Surface Water: {planet.surface_water}</h1>
                    <h1>Population: {planet.population}</h1>
                </> 
            }
            
            </>
                
        </div>
    )
}

export default Planet;