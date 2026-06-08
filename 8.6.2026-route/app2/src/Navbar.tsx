import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home | </Link>
      <Link to="/posts">Posts|</Link>
      <Link to="/products">Products</Link>
      {/* <Link to="/products/1">Product 1|</Link>
      <Link to="/products/2">Product 2|</Link>
      <Link to="/products/3">Product 3</Link> */}
    </div>
  )
}