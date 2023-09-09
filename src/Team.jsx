import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11);

    // handle add player
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    // handle remove player
    const handleRemove = () => {
        setTeam(team - 1);
    }

    // css style
    const teamStyle = {
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '12px'
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}