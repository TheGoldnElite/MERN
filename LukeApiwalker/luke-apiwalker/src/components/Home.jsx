import { Link } from 'react-router-dom';




const Home = props => {
    
    return(
        <div>
            <Link to={"/People/"}>People</Link> |
            <Link to={"/Planet"}>Planet</Link>
        </div>
    )
}



export default Home;