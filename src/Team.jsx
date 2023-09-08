import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    // console.log(adc);

    const handleAdd = () => {
        // const newTeam = team + 1;
        // setTeam(newTeam)
        setTeam(team + 1)
    }

    const handleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '20px',
        margin: '20px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {team} </h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}