import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Lightintro from './components/lightmod/lightintro/lightintro.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Lightintro",
    element: <Lightintro />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
