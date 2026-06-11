import { useEffect, useState } from 'react'
export default function Counter() {

  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    console.log('Count changed to:', count)
  }, [count])
  return (
    <>
    <h1>My Counter</h1>
    <button onClick={() => setCount(count + 1)}>Click me</button>
    <p>Count: {count}</p>
    </>
  )
}

