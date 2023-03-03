import React, {useState} from 'react';

let initialTeams = [
    {name: "Real Madrid", points: 72},
    {name: "Barcelona", points: 68},
    {name: "Atletico Madrid", points: 65},
    {name: "Sevilla", points: 59},
];

function footbalteams() {
    const [teams, setTeams] = useState(initialTeams)
    const [footbalteam, setfootbalteam] = useState('')
    const [points, setpoints] = useState(0)

    return (
        <div>
            <div>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Footbalteam name:</label>
                        <input type="text" value={footbalteam} onChange={(event) => {
                            setfootbalteam(event.target.value);
                        }}/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="number">Points:</label>
                        <input type="number" value={points} onChange={(event) => {
                            setpoints(parseInt(event.target.value));
                        }}/>
                    </div>
                    <button onClick={() => {
                        setTeams([...teams, {name: footbalteam, points: points}]);
                    }}>Přidat</button>
                </form>
            </div>
        {initialTeams.map((people) => {
            return (<div><ul>{people.name}</ul><ul>{people.points}</ul></div>)
        })}</div>
    )
}

export default footbalteams;