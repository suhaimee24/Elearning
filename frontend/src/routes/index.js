import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'

import Home from '../pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      }
    ],
  },
])
export default router;

