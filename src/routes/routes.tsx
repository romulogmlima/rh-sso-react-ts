
import { Result } from 'antd'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../components/MainLayout'
import { ProtectedRoutes } from '../components/ProtectedRoutes'
import { Login } from '../components/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <MainLayout />,
    children: [],
  },
  { path: '*', element: <Result status='404' title='Página não encontrada' /> },
])
