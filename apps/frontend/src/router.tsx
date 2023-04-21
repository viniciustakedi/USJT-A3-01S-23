import { createBrowserRouter } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import Layout from './components/Layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <SignInPage />}
    ]
  }
])
