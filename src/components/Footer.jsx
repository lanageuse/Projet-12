import logo from '../assets/logo-footer.svg'
function Footer() {
    return (
        <footer>
            <img src={logo} alt="Kasa" />
            <div className='footer-container'><p>© 2020 Kasa.</p><p>All rights reserved</p></div>
        </footer>
    )
}

export default Footer