import {NavLink} from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Photo <span>Grapys</span>
        </NavLink>
        <ul className={styles.link_list}>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive) ? styles.active : ''}>
                Home 
                </NavLink>
            </li>
            <li>
                <NavLink to='/login' className={({isActive}) => (isActive) ? styles.active : ''}>
                Login 
                </NavLink>
            </li>
            <li>
                <NavLink to='/registro' className={({isActive}) => (isActive) ? styles.active : ''}>
                Registrar 
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive) ? styles.active : ''}>
                Sobre 
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar