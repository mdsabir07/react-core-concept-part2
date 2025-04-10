import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAddCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }


    const counterStyle = {
        border: "2px solid orange"
    }

    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAddCount}>Add</button>
        </div>
    )
}