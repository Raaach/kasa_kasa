import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props){

    const [isContentIsVisible, setIsContentIsVisible]= useState(true)
    const showContent = () => {
        setIsContentIsVisible(!isContentIsVisible)
    }//c'est pour rendre visible le contenu 
    const classContent = (isContentIsVisible ? "visible " : "hidden ") + "description__content";//structure ternaires
    const classChevron = (isContentIsVisible ? "fas fa-chevron-up" : "fas fa-chevron-down");

    return(
            <div className='description__panel'> 
            <p className='description__header'onClick={showContent}>
                <span>{props.title}</span>
                <i className={classChevron}></i>
            </p>
            <p className={classContent}>{props.content}</p>
        </div>
    )
}