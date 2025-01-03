import React from 'react'

export default function AppCard({heading,description,isCenter=false,height="206",hoverEffect=""}) {
  return (
    <div className={`appCardContainer my-1 hide-scrollbar ${hoverEffect}`} style={{height:height+'px'}}>
       <h4 className={`cardHeading ${isCenter ?'text-center':''}`}>{heading}</h4>
        <p className={`cardDesc cardDescArea hide-scrollbar ${isCenter ?'text-center':''}`} style={{height:(height-100)+'px'}}>
        {description}
        </p>
  </div>
  )
}
