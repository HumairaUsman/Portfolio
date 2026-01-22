import React from 'react'
import "./Card.css"

function Card({title,image,link}) {
  return (
    <div className="card">
        <h1>{title}</h1>
        <div className="hovercard">
            <img src={image} alt="" />
        </div>
        {link && (
          // invisible full-card anchor so layout doesn't change but the card is clickable
          <a className="card-link" href={link} target="_blank" rel="noopener noreferrer" aria-label={title}></a>
        )}
    </div>
  )
}

export default Card
