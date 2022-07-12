const alivebuttonStyle = {
    backgroundColor:"lightgreen"
}

const deadButtonStyle = {
    backgroundColor:"salmon"
}



const Results = props => {
    return(
        <div>
            <table className="table table-striped">
                <tr>
                    <th>Name</th>
                    <th>Real Name</th>
                    <th>Power</th>
                    <th># of Sidekicks</th>
                    <th>Is Alive</th>
                    <th>Universe</th>
                </tr>
                {
                    //map is a for loop in react
                    props.allChars.map((character,i) =>{
                        return <tr> 
                            <td>Results</td>
                            <td>Name: {character.Name}</td>
                            <td>Real Name: {character.RealName}</td>
                            <td>Power: {character.Power}</td>
                            <td>Number of Sidekicks: {character.NumSidekicks}</td>
                            <td style={character.IsAlive ? alivebuttonStyle : 
                                deadButtonStyle} onClick {()=> props.toggleLife>{character.IsAlive ? "Yes" : "No"}</td>
                            <td>Universe: {character.Universe}</td>
                        </tr>
                    })
                }

            </table>
            
        </div>
    )
}

export default Results;