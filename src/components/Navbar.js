import {NavLink} from 'react-router-dom'

import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>
            Photo <span>Grapys</span>
        </NavLink>
        <ul>
            <li>
                <NavLink to='/'>
                Home 
                </NavLink>
                <NavLink to='/about'>
                About 
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar