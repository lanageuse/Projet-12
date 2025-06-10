import { NavLink } from "react-router";

function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Accueil</NavLink> 
                <NavLink to="/about">A propos</NavLink> 
            </nav>
        </header>
    )
}

export default Header