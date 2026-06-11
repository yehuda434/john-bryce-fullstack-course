import products from "./data/products"
import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <h2>{product.name}</h2>
          </Link>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}   