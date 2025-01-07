import React from 'react'
import { FaTimes } from "react-icons/fa";


export default function VideoModal({closeVideo}) {
  return (
    <div className='videoModal'>
       
         <div style={{padding: "2rem",position:'absolute'}} className='row col-md-12 d-flex justify-content-end'>
                  <div>
                    <div onClick={closeVideo} className='bars-btn'>
                        <FaTimes />
                    </div>
                  </div>
                </div>
        
         <div
      style={{
        overflow: "hidden",
        position: "relative",
      }}
    >
      <video
        src="/path/Cynergy-Showreel-Final.mp4"
        autoPlay
        loop
        controls
        style={{
          width: '100%',
          height:'100vh',
          objectFit: "cover",
          cursor: "auto", 
        }}
        onLoadedMetadata={(e) => {
          e.target.volume = 0.5;
        }}
      />
    </div>
    </div>
  )
}
