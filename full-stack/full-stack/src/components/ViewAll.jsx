import {useEffect,useState} from "react";
import axios from 'axios';

const ViewAll = props => {
    const [games,setGame] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then(res=> setGame(res.data))
            .catch(err=>console.log(err))
    },[])

    return (
        <div>
            <h2>all games</h2>

            <div>
                {
                    games ? games.map(item,i) => <Link to={"/add"}<div key ={i}>
                        <h3>{item.title}</h3>
                        <img src = {item.art} alt="image art"/>
                        <h4>min players required: {item.minPlayers}</h4>
                    </div>
                }
            </div>
        </div>
    )
}