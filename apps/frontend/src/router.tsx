import { createBrowserRouter } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import Layout from './components/Layout/Layout'
import AuthCreateOrReturn from './pages/AuthCreateOrReturn/AuthCreateOrReturn'
import UserPage from './pages/UserPage/UserPage'
import CompareDataPage from './pages/CompareDataPage/CompareDataPage'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <SignInPage />},
      { path: '/auth', element: <AuthCreateOrReturn />},
    ]
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/usuario', element: <UserPage />},
      { path: '/comparar/:id', element: <CompareDataPage />}
    ]
  }
])
