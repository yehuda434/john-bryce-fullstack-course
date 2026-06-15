import {NavLink} from 'react-router-dom' 
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h2 className={styles.logo}>MiniS Store</h2>
      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
      </div>
    </div>
  )
}