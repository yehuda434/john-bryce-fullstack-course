import { useState } from "react"
//       let f = ()=>{}
//       let f = function (){}

export default function ToggleButton() {
    const [isOn, setIsOn] = useState<boolean>(false)
  
    return (
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    )
  }
  