import { useState } from 'react';
export default function Counter() {
    //let counter =0;
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    const decrement = () => {
        setCounter(counter - 1);
        console.log(counter);
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>Counter: {counter}</p>
        </div>
    )
}