import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    // handle add counter
    const addCounter = () => {
        const handle = count + 1;
        setCount(handle);
    }

    // handle Minus Counter
    const minusCounter = () => {
        const handleMinus = count - 1;
        setCount(handleMinus);
    }

    return (
        <div style={{border: '1px solid green', padding: '10px', borderRadius: '10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={addCounter}>Add Counter +</button>
            <button onClick={minusCounter}>Minus Counter -</button>
        </div>
    )
}