import { NavLink } from "react-router";
import { ReactComponent as Logo } from '../assets/logo-footer.svg'
function Footer() {
    return (
        <footer>
            <NavLink to="/"><Logo /></NavLink>
            <div className='footer-container'><p>© 2020 Kasa.</p><p>All rights reserved</p></div>
        </footer>
    )
}

export default Footer