import { useSearchParams } from "react-router-dom"
import {useNavigate} from "react-router-dom"
export default function Home() {
  // get the query string
  const [searchParams] = useSearchParams()
  const x = searchParams.get("x")
  
  
  
  const navigate = useNavigate()

  function gotoAbout() {
    navigate("/about")
  }
  return (
    <div>
      <h1>Home</h1>
      <p>ID: {x}</p>
      <button onClick={gotoAbout}>Go to About</button>
    </div>
  )
}