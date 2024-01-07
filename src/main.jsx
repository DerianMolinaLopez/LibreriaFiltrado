import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Inicio from './pages/Inicio'
import Layout from './pages/Layout'
import MisLibros from './pages/MisLibros'
import  {createBrowserRouter,RouterProvider} from 'react-router-dom'
//creamos nuestro archivo de rutas
const router = createBrowserRouter([
  {
    path: '/',//mi pagina principal....../8
    element: <Layout />,
    children:[
      {
        index:true,
        element: <Inicio />
      },
      {
        path: '/mislibros',
        element: <MisLibros/>,
      }
      
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
