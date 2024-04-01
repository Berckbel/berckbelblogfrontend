import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { BlogContextProvider } from './context/BlogContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
