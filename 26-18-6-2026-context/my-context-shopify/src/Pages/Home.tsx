import { useContext } from "react";
import CartContext from "../Context/CartContext";
export default function Home() {

    const {items} = useContext(CartContext);
    return (
        <div>
            Home
            <p>{items.map((item) => item).join(', ')}</p>
        </div>
    )
}