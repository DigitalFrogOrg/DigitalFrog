// components/CustomVideoPlayer.js
"use client";
import React, { useRef, useState } from 'react';

const CustomVideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="col-md-12 vh-100 d-flex justify-content-center align-items-center"    style={{
      position: 'relative',}}>
      <video
        ref={videoRef}
        src={videoSrc}
        style={{ width: '100%', display: isPlaying ? 'block' : 'none' }}
        onEnded={() => setIsPlaying(false)}
        muted
        onClick={() => setIsPlaying()}
      />
      <button
        onClick={handlePlayPause}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'transparent',
          border: 'none',
          // borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        
        {isPlaying ? null : <img src="./images/play-btn.svg" alt="play btn" className="pe" />}
      </button>
    </div>
  );
};

export default CustomVideoPlayer;
