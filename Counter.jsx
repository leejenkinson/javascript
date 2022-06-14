import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <div className="Counter">
                <input type="number" value={count} />
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count + 5)}>+5</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
                <button onClick={() => setCount(count - 5)}>-5</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}

export default Counter;