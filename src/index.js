import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import {router} from "./routes/router"

ReactDOM.createRoot(document.getElementById('root')).render(// Crée un "root" React avec l'élément HTML ayant l'identifiant 'root'
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>//Il utilise le mode strict de React (<React.StrictMode>) qui aide à détecter les pratiques non sûres et déconseillées.
)
