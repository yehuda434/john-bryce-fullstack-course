import { useState } from "react"
interface GreetProps {
    firstName: string;
    lastName: string;
}
export default function Greet({ firstName, lastName }: GreetProps) {
    const [message, setMessage] = useState<string>("");
   
    return (
        <div>
            <h1>Greet</h1>
            <p>Hello, {firstName} {lastName}</p>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <p>{message}</p>
        </div>
    )
}