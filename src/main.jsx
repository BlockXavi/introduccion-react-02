import React from 'react'
import ReactDOM from 'react-dom/client'
// Importo BrowserRouter para gestionar las rutas
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Añadimos el BrowserRouter que envuelve la App para poder añadir las rutas de la app*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>  
  </React.StrictMode>
)
