import {useEffect,useState} from "react";
import axios from 'axios';

const ViewAll = props => {
    const [games,setGame] = useState(null);
    const [update,setUpdate] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/games")
            .then(res=> setGame(res.data))
            .catch(err=>console.log(err))
    },[])


    const handleDelete = id => {
        axios.delete("http://localhost:8000/api/games/delete" + id)
            .then(() => setUpdate(!update))
            .catch(err => console.log("issue deleting", err))
    }
    return (
        <div>
            <h2>all games</h2>

            <div>
                {
                    games ? games.map(item,i) => <div key ={i}>
                        <Link  to={`/game/$(item._id}`}>
                            <h3>{item.title}</h3>
                            <img src = {item.art} alt="image art"/>
                            <h4>min players required: {item.minPlayers}</h4>
                        </Link>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                        <Link to{`/update/${item.id}`}><button></button></Link>
                    </div>
                }
            </div>
        </div>
    )
}