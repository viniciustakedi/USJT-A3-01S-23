import { createBrowserRouter } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import Layout from './components/Layout/Layout'
import AuthCreateOrReturn from './pages/AuthCreateOrReturn/AuthCreateOrReturn'
import UserPage from './pages/UserPage/UserPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <SignInPage />},
      { path: '/auth', element: <AuthCreateOrReturn />},
      { path: '/usuario', element: <UserPage /> }
    ]
  }
])
