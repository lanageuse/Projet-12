import { Outlet } from 'react-router'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
function MainLayout() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout