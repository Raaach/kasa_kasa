import React from 'react' // de la bibliothèque react
import {Link} from "react-router-dom"// bibliotheque react-router-dom
import "./ApartmentCard.scss"

function ApartmentCard(props) {
  //on récupère l'id à partir des props
  const state ={
      apartmentId:props.id
    }
//dans Link en dessous, on récupère l'id avec le lien de l'apart 
  return (
    <Link to="/flat" state={state}>   
      <div className='apartment'> 
        <img src={props.imageUrl} alt=""/>
        <div className='apartment__subtitle'>{props.title}</div>
      </div>
    </Link>
  )
}// on ferme le composant ApartmentCard

export default ApartmentCard