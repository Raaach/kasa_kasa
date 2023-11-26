 import React, { useEffect, useState } from 'react'
 import "./AppartGrid.scss"
 import ApartmentCard from "./ApartmentCard.jsx"

 
 function AppartGrid() {
  const [apartments, setApartments]= useState([])// Utilisation de l'état local pour stocker la liste des appartements

  useEffect(() =>{
    const abortController = new AbortController() // ce controleur me permet de controler la requete fetch

    fetch("db.json", {signal: abortController.signal})            //on a utilisé fetch pour faire aparaitre les infos en json/se n'est pas le même res 
    .then((res) => res.json()) 
    .then((res)=>setApartments(res)) 
    .catch((err) => console.error(err))

    return() =>{
      abortController.abort() // ici ce controller l'arrete
    }// c'est la fonction cleanUp en fait on arrete la requete fetch quand le client passe à une autre page
  },[]) // useEffect avec array vide = excute seulement au chargement initial
  // La fonction de nettoyage dans useEffect sert à annuler la requête si le composant est démonté avant que la requête ne soit terminée.

   return (
    <div className='grid'>
      {apartments.map((apartment)=>(
        <ApartmentCard title={apartment.title} imageUrl= {apartment.cover} id={apartment.id} key={apartment.id}/>  
        //apartment est un gros objet qui contient title, image, id etc... //on fait appelle cette ligne pour avoir plusieur apartement au lieu de tout écrire à la main chaque div 
      ))}
    </div>
   )
 }
 
 export default AppartGrid