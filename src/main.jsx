import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Principal from './Componentes/Navlateral/Principal/Principal.jsx'
import Projetos from './Componentes/Navlateral/Projetos/Projetos.jsx'
import Contato from './Componentes/Navlateral/Contato/Contato.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Principal/>},
    {path:'Projetos', element: <Projetos/>},
    {path:'Contato', element: <Contato/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)