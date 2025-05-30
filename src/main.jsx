import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import './index.css'
import { AuthProvider } from './store/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </AuthProvider>
)
