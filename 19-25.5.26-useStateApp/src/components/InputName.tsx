import { useState } from "react"

export default function NameInput() {
    const [name, setName] = useState<string>('')
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        //console.log(e.target)
        console.log(e.target.value);
        setName(e.target.value);



    }
    return (
      <div>
       <input value={name} onChange={handleChange} type="text"/>
        <button onClick={() => setName('')}>Clear</button>
        <p>Hello {name}!</p>
    </div>
  );
}