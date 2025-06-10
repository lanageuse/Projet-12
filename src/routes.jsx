import { createBrowserRouter } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Property from './pages/Property'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path : "/property/:id", 
        element : <Property />
      }
    ]
  }
])

export default router