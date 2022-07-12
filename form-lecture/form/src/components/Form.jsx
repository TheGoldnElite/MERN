import {useState} from 'react';



const Form = props => {
    //These are the attributes of items I am making
    const [Name,setName] = useState("");
    const [Picture,setPicture] = useState("");
    const [canRender,setCanRender] = useState=(false);
    const onSubmitHandler = (e) => {
        //prevent default prevents the page from refreshing
        e.preventDefault();
        //console.log(e);
        setCanRender(true);

    }

    const TextValid = input => {
        if(input.length == 0){
            return false;
        }
        return true;
    }


    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" id="Name" onChange = {e => setName(e.target.value)}/> 
                    {TextValid(Name) && !canRender ? "" : <p class="text-danger">Name is required</p>}
                
                </div>
                <div>
                    <label htmlFor="Picture">Picture</label>
                    <input type="text" name="Name" id="Name" onChange = {e => setPicture(e.target.value)}/>
                    {TextValid(Picture) && !canRender ? "" : <p class="text-danger">Picture is required</p>}
                
                </div>
            </form>
            {
                canRender ?<div>
                <h4>Name:{Name}</h4>
            
        </div>
    );
}

export default Form;