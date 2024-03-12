import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header/Header.jsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
