import React, { useState } from 'react'
import "./ImageBanner.scss"

export function ImageBanner(props) {
  const pictures = props.pictures

  const [curentPicture, setCurrentPicture] = useState(0)

  const getClassName = (i) =>{
    if( i === curentPicture) return "show"
    return ""
  }

  const moveToNext=()=>{
    setCurrentPicture((curentPicture+1)%pictures.length) //modulo qui permet de ne pas dépasser une certaine valeur, ici c'est la length
  }
  const moveToPrevious=()=>{
    const newCurentPicture = curentPicture - 1
    if (newCurentPicture <0){
      setCurrentPicture(pictures.length-1) 
      return
    }
    setCurrentPicture((curentPicture-1))
  }

  const areTherePictures = () =>{
    return pictures && pictures.length > 0
  }

  const getCarouselOrDefaultImg = () => {
    if (!areTherePictures()){
      return <img src="/logo__about.png" className="show" alt=''/>
    }
    return pictures.map((pic, i)=>(
      <img key={pic} src={pic} alt='' className={getClassName(i)}></img>
      ))
    }
  

  return (
    <div className='image__banner'>
      <div className='image__container'>{getCarouselOrDefaultImg()}</div>
      {areTherePictures() && pictures.length > 1 &&(
      <>
        <button className="btn btn_next" onClick={moveToNext}>
          <i className="fas fa-chevron-right">
          </i>
        </button>
        <span className='counter__slide'>
          {curentPicture + 1} / {pictures.length}
          </span>
          
        <button className="btn btn_previous" onClick={moveToPrevious}>
          <i className="fas fa-chevron-left"></i>
        </button>
      </>)}
    </div>
  ) 
}
