import { useState } from "react"
export default function ToggleButton() {
    const [isOn, setIsOn] = useState<boolean>(true)
  
    return (
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    )
  }
  