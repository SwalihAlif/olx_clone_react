import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contex/AuthContex.jsx'
import Post from './contex/PostContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Post>
        <App />
      </Post>
    </AuthProvider>
  </StrictMode>,
)
