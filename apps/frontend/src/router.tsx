import { createBrowserRouter } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import Layout from './components/Layout/Layout'
import DashboardPage from './pages/DashboardPage/DashboardPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <SignInPage />},
      { path: '/dashboard', element: <DashboardPage />}
    ]
  }
])
