//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import { useEffect } from 'react';
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"



function Home() {
    const navigate = useNavigate();
    const [search,setSearch] = useState({
        options:"people",
        id:""
    });


    const Handler = (e) => {
        setSearch({...search,[e.target.name]:e.target.value})
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/" + search.options + "/" + search.id);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Search For:</label>
            <select name="options" value={search.options} onChange={Handler}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>Id:</label>
            <input name="id" value="search.id"/>
            <input type="submit" value="Search">Search</input>
        </form>
    )
}
    



export default Home;