import React from 'react'
import "./ApartmentHeader.scss"

export function ApartmentHeader(props) {

    const {flat} = props
    const {name}= flat.host
    const[firstName, lastName] = name.split(" ")

  return (
    <div className='apartment__header'>
    <div className='apartment__title'>
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className='apartment__tags'>
            {flat.tags.map((tag)=>(
                <span key={tag}>{tag}</span>
                ))}
        </div>
    </div>
    <div className='apartment__owner'>
        <div className='apartment__owner__details'>
            <h3>
                <span>{firstName}</span>
                <span>{lastName}</span>
            </h3>
            <div className='apartment__owner__badge'>
                <img src={flat.host.picture} alt=""/>
            </div>
        </div>
        <div className='apartment__owner__stars'>
        {[1, 2, 3, 4, 5].map((number)=>(      
                <span key={number} className={props.flat.rating >= number?"on":""}>
                ★
                </span>      
        ))}
        </div>
    </div>
</div>
  )
}
