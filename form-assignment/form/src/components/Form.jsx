import React, {useState} from 'react';

const Form = props => {

    

    const [firstName,setfirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    const [canRender,setCanRender] = useState(false);

    //method that triggers when submitted
    const onSubmitHandler = (e) => {
        //prevent default prevents the page from rendering
        e.preventDefault();
        console.log(e);
        setCanRender(true);
    }

    //create a method
    const TextValid = input => {
        if(input.length < 2){
            return false;
        }
        return true;
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" onChange={e => setfirstName(e.target.value)}/>
                    {TextValid(firstName) ? "" :<p>First Name must be at least 2 characters</p>}
                </div>
                <div>
                    <label htmlFor="LastName">Last Name:</label>
                    <input type="text" name="LastName" id="LastName" onChange={e => setLastName(e.target.value)}/>
                    {TextValid(LastName) ? "" :<p>Last Name must be at least 2 characters</p>}
                </div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input type="text" name="Email" id="Email" onChange={e => setEmail(e.target.value)}/>
                    {TextValid(Email) ? "" :<p>Email must be at least 2 characters</p>}
                </div>
                <div>
                    <label htmlFor="Password">Password:</label>
                    <input type="text" name="Password" id="Password" onChange={e => setPassword(e.target.value)}/>
                    {TextValid(Password) ? "" :<p>Password must be at least 2 characters</p>}
                </div>
                <div>
                    <label htmlFor="Password">Confirm Password:</label>
                    <input type="text" name="Password" id="Password" onChange={e => setPassword(e.target.value)}/>
                    {TextValid(Password) ? "" :<p>Passwords must match</p>}
                    {TextValid(Password) ? "" :<p>Password must be at least 2 characters</p>}
                </div>
            </form>
            <input type="submit" value="Submit"/>

            {
                //ternary, question true :false
                canRender ? <div >
                    <h1>Your Form Data</h1>
                    <h2>First Name: {firstName}</h2>
                    <h2>Last Name: {LastName}</h2>
                    <h2>Email: {Email}</h2>
                    <h2>Password: {Password}</h2>
                    <h2>Confirm Password:{Password}</h2>
                </div>: ""
            }

        
            <div >
                <h1>Your Form Data</h1>
                <h2>First Name: {firstName}</h2>
                <h2>Last Name: {LastName}</h2>
                <h2>Email: {Email}</h2>
                <h2>Password: {Password}</h2>
                <h2>Confirm Password:{Password}</h2>
            </div>
        </div>
    );
}

export default Form;