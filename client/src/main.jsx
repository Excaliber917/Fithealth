import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { MessageContextProvider } from './context/MessageContext.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <MessageContextProvider>
          <App />
        </MessageContextProvider>
      </AuthContextProvider>
    </DarkModeProvider>
  </StrictMode>,
)
