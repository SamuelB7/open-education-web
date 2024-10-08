import { Box } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Box sx={{
      display: 'flex',
    }}>
      <RouterProvider router={router} />
    </Box>
  </StrictMode>,
)
