import { useContext } from "react";
import CartContext from "../Context/CartContext";
export default function ProductList() {

    const {addToCart, removeItem, clearCart} = useContext(CartContext);

    let products = ['laptop', 'mouse', 'keyboard', 'monitor'];
    return (
        <div>
            <h1>Product List</h1>
            <button onClick={() => clearCart()}>Clear Cart</button>
            {products.map((product) => (
                <div key={product}>
                    <h2>{product}</h2>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                    <button onClick={() => removeItem(product)}>Remove from Cart</button>
                </div>
            ))}
        </div>
    )
}