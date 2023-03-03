import { NavLink } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__content">
          <span className="material-symbols-outlined">menu</span>
          <span>Menú</span>
        </div>
        <ul className="nav__ul">
          <div className="nav__content">
            <span className="material-symbols-outlined">library_add</span>
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "NavLink__onclick" : ""}`
                }
                to="/"
              >
                Ingresos
              </NavLink>
            </li>
          </div>
          <hr />
          <div className="nav__content">
            <span className="material-symbols-outlined">delete_forever</span>
            <li className="nav__item">
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "NavLink__onclick" : ""}`
                }
                to="/demas"
              >
                Gastos
              </NavLink>
            </li>
          </div>
        </ul>
        <span className="header__legend">&copy; Carlos Castro </span>
      </nav>
    </header>
  );
};
