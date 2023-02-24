import React from 'react'
import ReactDOM from 'react-dom/client'
import { IngresosGastos } from './IngresosGastos'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <IngresosGastos />
    </BrowserRouter>
  </React.StrictMode>,
)
