import {useEffect, useState } from "react"

export default function Timer() {
const [count, setCount] = useState(0)

    useEffect(()=>{
    let timer = setInterval(()=>{
        setCount(count + 1)
    }, 1000)


    return () => {
        clearInterval(timer)
    }
}, [count])
  return (
    <>
    <h1>My Timer</h1>
    <p>Count: {count}</p>
    </>
  )
}