// Import necessary modules from React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import the main CSS file
import App from './App.jsx' // Import the main App component

// Create a root element and render the App component inside StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
