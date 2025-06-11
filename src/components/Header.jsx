import { NavLink } from "react-router";
import logo from "../assets/logo.svg"

function Header() {
    return (
        <header>
            <img src={logo} alt="Kasa" className="logo" />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header