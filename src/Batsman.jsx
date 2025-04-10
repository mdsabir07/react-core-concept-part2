import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [four, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }

    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours = four + 1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }

    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h3>Player: Bangaldeshi</h3>
            {
                runs >= 50 && <p>Weldone! You achived half century!</p>
            }
            <p><small>Six: {sixes}</small></p>
            <p><small>Four: {four}</small></p>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}
