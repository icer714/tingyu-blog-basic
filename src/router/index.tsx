import { Navigate } from 'react-router-dom'
import Home from '@/pages/home/Home'
import HomeRoutes from './modules/Home'
export default [
  {
    path: '/home',
    element: <Home />,
    children: HomeRoutes
  },
  {
    path: '/',
    element: <Navigate to="/home" />
  },
]