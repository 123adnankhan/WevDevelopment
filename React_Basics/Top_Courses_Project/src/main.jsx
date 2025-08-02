import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// whenever you need to use toast in your react App make sure its Toast Container and its css 


createRoot(document.getElementById('root')).render(
 
   <div>
    <App />
    <ToastContainer/>
  </div>

)
