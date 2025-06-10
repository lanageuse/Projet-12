import { Outlet } from 'react-router'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
function MainLayout() {
    return (
        <div>
        <Header/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout