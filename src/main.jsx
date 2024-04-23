import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './pages/Error.jsx'
import App from './App.jsx'
import './index.css'

import { Product } from './pages/products/Product.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />,
    errorElement: <ErrorPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
