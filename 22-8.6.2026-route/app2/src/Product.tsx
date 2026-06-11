import { useParams } from "react-router-dom"

import products from "./data/products"
import { Link } from "react-router-dom"
export default function Product() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))
    if (!product) {
      return <div>Product not found</div>
    }
  return (
    <div>
      <h1>Product</h1>
      <p>Product ID: {id}</p>
      <Link to="/products">Back to Products</Link>  
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
      </div>
    </div>
  )
}