import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contex/AuthContex.jsx'
import Post from './contex/PostContext.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Post>
        <>
          <App />
          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" // or "dark"
          />
        </>
      </Post>
    </AuthProvider>
  </StrictMode>
)

