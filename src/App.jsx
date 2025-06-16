import { RouterProvider } from 'react-router'
import router from './routes'
import { ListingsProvider } from './context/ListingsContext'
function App() {
  return (
    <ListingsProvider>
      <RouterProvider router={router} />
    </ListingsProvider>
  )
}

export default App
