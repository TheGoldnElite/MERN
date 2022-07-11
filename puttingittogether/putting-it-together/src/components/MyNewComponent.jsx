const First=props => {


    const {firstName,lastName,age,hairColor}=props;
    const[myAge,setMyAge] = useState(age);
    const updateAge = () =>setMyAge(myAge + 1);

    return(
        <div>
            <h1>{lastName},{firstName}</h1>
            <h2>Age:{myAge}</h2>
            <h2>Hair Color:{hairColor}</h2>
            <button onClick={updateAge}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}




export default First;



