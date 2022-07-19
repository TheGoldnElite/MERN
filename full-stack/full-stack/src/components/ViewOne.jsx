import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams} from 'react-route-dom';

const ViewOne = props => {
    const {_id} = useParams();
    const [oneGame,setOneGame] = useState(null)
    useEffect(() => {
        axios.get("http://localhost:8000/api/games" + _id)
            .then(res=> (res.data))
            .catch(err=>console.log(err))
    },[])
    return (
        <div>{
            oneGame ? <div>
            <h2>{oneGame.title}</h2>
            <img src={oneGame.art} alt ="image art"/>
            <h3>min num of players: {oneGame.minPlayers}</h3>
            </div> :""
        }
        </div>
    )

}