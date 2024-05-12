import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import '../css/video.css'; // Make sure this path is correct
import videoSource from '../Fitnes-images/fitness-video/BuildHub-fitnes-video.mp4'; // Use import for the video source

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop style={{ width: '100%', height: 'auto' }}>
        <source src={videoSource} type="video/mp4" />
       </video>
      <div className="button-container">
        <button className="explore-button"><a href="">Explore More</a> </button>
      </div>
    </div>
  );
};

export default VideoBackground;
