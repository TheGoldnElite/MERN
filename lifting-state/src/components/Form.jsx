import {useState} from 'react';

const Form = props => {
    //option A
    //const [Name,setName] = useState("");
    //const [RealName,setRealName] = useState("");
    //const [Power,setPower] = useState("");
    //const [NumSidekicks,setNumSidekicks] = useState(0);
    //const [IsAlive,setIsAlive] = useState(true);
    //const [Universe,setUniverse] = useState("");

    //Option B
    const[myForm,setMyForm] = useState({
        Name:"",
        RealName:"",
        Power:"",
        NumSideKicks:0,
        IsAlive:true,
        Universe:""
    });

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]:e.target.value})
    }

    const checkedHandler = e => {
        setMyForm({...myForm, [e.target.name]:e.target.checked})
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        

        //const character ={Name,RealName,Power,NumSidekicks,IsAlive,Universe};
        //from app.jsx prop
        props.newChar(myForm);
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmitHandler}>   
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="RealName">Real Name</label>
                    <input type="text" name="RealName" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="Power">Power</label>
                    <input type="text" name="Power" onChange={onChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="NumSidekicks">Number of Sidekicks</label>
                    <input type="text" name="NumSidekicks" onChange={onChangeHandler}/>
                </div>
                <div>
                    <input type="checkbox" name="IsAlive" checked={myForm.IsAlive} onChange={onChangeHandler}/>
                    <label htmlFor="IsAlive">Is Alive?</label>

                </div>
                <div>
                    <label htmlFor="Universe">Universe?</label>
                    <input type="radio" name="Universe" value="DC" onChange={checkedHandler}/>
                    <label htmlFor="Universe">DC</label>
                    <input type="radio" name="Universe" value="Marvel" onChange={checkedHandler}/>
                    <label htmlFor="Universe">Marvel</label>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>

            </form>
        </div>

    )
}

export default Form;