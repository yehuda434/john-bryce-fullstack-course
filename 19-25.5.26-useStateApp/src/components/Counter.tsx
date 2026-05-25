import { useState } from 'react';
import './Counter.css';
export default function Counter() {
   // phase 1 : create a state variable
    const [count, setCount] = useState(0);
    // phase 2 : create a function to increment the state variable
    function increment() {
        setCount(count + 1);
        console.log(count);
    }
    function reset() {
        setCount(0);
    }
    // phase 3 : return the JSX
    return (
        <div className="border">
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}