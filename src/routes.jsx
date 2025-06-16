import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router'
const MainLayout = lazy(() => import('./layouts/MainLayout'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Property = lazy(() => import('./pages/Property'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback="loading...."><MainLayout /></Suspense>,
    errorElement: <NotFound />,
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
        path: "/property/:id",
        element: <Property />
      }
    ]
  }
])

export default router