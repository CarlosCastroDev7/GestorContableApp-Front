
import { NavLink } from 'react-router-dom'
import './styles.css'


export const NavBar = () => {

  return (
    <nav className="nav__principal">
        <ul>
            <li>
              <NavLink 
                className={ ({isActive}) => `${isActive ? 'NavLink__onclick': ''}` }
                to='/'
              >Ingresos</NavLink>
            </li>   
            {/* <li>
              <NavLink 
                className={ ({isActive}) => `${isActive ? 'NavLink__onclick': ''}` }
                to='/demas'
              >Gastos</NavLink>
            </li>      */}
        </ul>
    </nav>
  )
}
