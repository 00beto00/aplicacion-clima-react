import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/weatherStyles.css'
import { WheatherApp } from './WheatherApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WheatherApp />
  </React.StrictMode>,
)
