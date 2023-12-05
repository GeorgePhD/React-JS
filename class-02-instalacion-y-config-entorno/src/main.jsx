import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import User from './Components/User.jsx'
import Navbar from './Components/Navbar.jsx'
import './Components/Navbar.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <User />
  </React.StrictMode>,
)

