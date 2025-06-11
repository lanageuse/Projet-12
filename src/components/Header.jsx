import { NavLink } from "react-router";
import logo from "../assets/logo.svg"

function Header() {
    return (
        <header>
            <NavLink to="/"><img src={logo} alt="Kasa" className="logo" /></NavLink>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header >
    )
}

export default Header