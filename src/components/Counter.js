import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
        <div >
            <h3>{count}</h3>
            <button onClick={increment} style={{ fontSize: "20px", marginRight: "20px" }}>+</button>
            <button onClick={decrement} style={{ fontSize: "20px", marginRight: "20px" }}>-</button>
            <button onClick={() => setCount(0)} style={{ fontSize: "20px" }}>重置</button>
        </div>
    )

}

export default Counter