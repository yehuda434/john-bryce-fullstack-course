import { useContext } from "react";
import CartContext from "../Context/CartContext";
export default function Navbar() {

    const {items} = useContext(CartContext);
    return (
        <div>
            Navbar
            <p>{items.length} items in cart</p>
        </div>
    )
}