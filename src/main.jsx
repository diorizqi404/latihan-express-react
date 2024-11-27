import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // import BrowserRouter dari react-router-dom
import { AuthProvider } from './context/AuthContext.jsx' // import AuthProvider dari AuthContext.jsx

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)
