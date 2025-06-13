import { NavLink } from "react-router";
import { ReactComponent as Logo } from "../assets/logo.svg"

function Header() {
    return (
        <header>
            <NavLink to="/"><Logo /></NavLink>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header >
    )
}

export default Header