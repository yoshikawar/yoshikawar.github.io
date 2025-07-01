import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MovieDetall from './MovieDetall.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Header from './Header.tsx'

const router = createBrowserRouter([
  {path: "/", Component: App},
  {path: "/movies/:id", Component: MovieDetall},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header>
      <RouterProvider router={router} />
    </Header>
  </StrictMode>
);