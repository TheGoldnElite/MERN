import {useParams} from 'react-router-dom';


const Cities = props => {
    const {city} =useParams();
    return (
        <>
            <h2>Cities page for {city}</h2>
        </>
    )
}

export default Cities;