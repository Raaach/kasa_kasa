import React from 'react'
import {createBrowserRouter, Outlet} from "react-router-dom"
import HomePage from '../pages/HomePage.jsx'
import ApartmentPage from '../pages/ApartmentPage.jsx'
import Footer from "../layout/Footer.jsx"
import Navbar from "../components/Navbar.jsx"
import Main from '../layout/Main.jsx'
import About from '../pages/About.jsx'
import ErrorPage404 from '../pages/ErrorPage404.jsx'

// Définition d'un modèle de mise en page avec en-tête, pied de page et contenu principal
const HeaderFooterLayout =() =>{ //ici nous avons créé un model pour chaque pages, graçe à Outlet
  return<>  
    <Navbar/>
    <Main>
      <Outlet/>
    </Main>
    <Footer/>
  </>
}
// Configuration du routeur avec les différentes routes et leurs composants associés
export const router = createBrowserRouter([
  {
    element:<HeaderFooterLayout/>,
    errorElement:<ErrorPage404/>,
    children:[
        {
          path:"/",
          element: <HomePage/>
        },
        {
          path:"/flat",
          element:<ApartmentPage/>
          
        },
        {
            path:"/about",
            element:<About/>
          },
        ],
    },
]
)

