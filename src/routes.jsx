import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import Loading from './components/Loading'
const MainLayout = lazy(() => import('./layouts/MainLayout'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Property = lazy(() => import('./pages/Property'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<Loading />}><MainLayout /></Suspense>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Loading />}><Home /></Suspense>,
        errorElement: <NotFound />,
      },
      {
        path: 'about',
        element: <Suspense fallback={<Loading />}><About /></Suspense>,
        errorElement: <NotFound />,
      },
      {
        path: '*',
        element: <Suspense fallback={<Loading />}><NotFound /></Suspense>,
      },
      {
        path: "/property/:id",
        element: <Suspense fallback={<Loading />}><Property /></Suspense>,
        errorElement: <NotFound />,
      }
    ]
  }
])

export default router