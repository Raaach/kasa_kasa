import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../layout/Main'
import {Link} from "react-router-dom"
import "./ErrorPage404.scss"

export default function ErrorPage404() {
  return (
    <>
        <Navbar/>
        <Main>
            <div className="error_page">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas</h2>
                <Link to="/">Retourner sur la page d'acceuil</Link>
            </div>
        </Main>
    </>
  )
}
