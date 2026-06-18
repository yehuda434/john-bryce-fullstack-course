import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import { useContext } from 'react';
export default function NavBar() {
    const { items } = useContext(CartContext);
    return (
        <div>
            <p>{items.length} items in cart|</p>
            <Link to="/">Home|</Link>
            <Link to="/proucts">ProductList</Link>
        </div>
    )
}