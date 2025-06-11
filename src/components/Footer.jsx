import { NavLink } from "react-router";
import logo from '../assets/logo-footer.svg'
function Footer() {
    return (
        <footer>
            <NavLink to="/"><img src={logo} alt="Kasa" /></NavLink>
            <div className='footer-container'><p>© 2020 Kasa.</p><p>All rights reserved</p></div>
        </footer>
    )
}

export default Footer