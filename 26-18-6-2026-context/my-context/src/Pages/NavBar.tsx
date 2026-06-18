import UserContext from '../Context/UserContext';
import { useContext } from 'react';
export default function NavBar() {
    const { name, isLoggedIn } = useContext(UserContext);
    return (
        <div>
            NavBar
            <p>{name} {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        </div>
    )
}