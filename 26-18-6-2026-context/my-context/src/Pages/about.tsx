import UserContext from '../Context/UserContext';
import { useContext } from 'react';
export default function About() {
    const { name, isLoggedIn } = useContext(UserContext);
    return (
        <div>
            About
            <p>{name} {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
        </div>
    )
}