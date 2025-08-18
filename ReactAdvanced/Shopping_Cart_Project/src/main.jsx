import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.js'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')).render(
  // Linking of react and redux 
  <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>
  
  </BrowserRouter>
)
