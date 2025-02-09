import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './assets/Componets/Home/Home.jsx'
import Contact from './assets/Componets/Routes/Contact.jsx'
import Registration from './assets/Componets/Authenticate/Register/Register.jsx'
import Login from './assets/Componets/Authenticate/Login/Login.jsx'
import { AuthProvider } from './Provider/AuthProvider.jsx'
import NewsDetail from './assets/Componets/Home/News.details.jsx'
import PrivateRoute from './assets/Componets/Routes/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      { path: '/register', element: <Registration /> },
      { path: '/login', element: <Login /> },
      {
        path: '/news/:id',
        element: (
          <PrivateRoute>
            <NewsDetail />
          </PrivateRoute>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
