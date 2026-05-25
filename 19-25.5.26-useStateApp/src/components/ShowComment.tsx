import { useState } from "react"
export default function ShowComment() {
    const [isvisible, setIsvisible] = useState<boolean>(false)
    let message = "Hello World";
    return (
        <div>
            <button onClick={() => setIsvisible(!isvisible)}>Show Message</button>
            {isvisible ? <p>Message: {message}</p> : <p></p>}
        </div>
    );
}