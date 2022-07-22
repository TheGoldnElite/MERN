import {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ViewAll = props => {
    const [products,setProduct] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProduct(res))
            .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h2>All Products</h2>
            {
            products ? products.map((item,i) =><Link to="/product/${item._id}"><div key={i}>
                <h2>Title:{item.title}</h2>
                
            </div></Link>) : ""
            }
        </div>
    )
}

export default ViewAll;