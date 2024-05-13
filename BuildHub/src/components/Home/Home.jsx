import React from "react";
import "./home.css";
import video from "/public/contents/buildhub.mp4";

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video className="video-landpage" src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent">
        <div className="text">
          <h1>We Are BuildHub</h1>
          <p style={{color:'white'}}>A fitness movement that is worth breaking a sweat for</p>
          <br />
          <button className="btn1">EXLORE BUILDHUB PASS</button>
          <div className="arrow">&#9660;</div>
          <div className="cardContainer">
            <div className="card">
              <h4>Buildpass</h4>
              <h2 className="elite">ELITE</h2>
              <li>
                Unlimited access to group classes,all gyms and at-home workouts
              </li>
            </div>
            <div className="card">
              <h4>Buildpass</h4>
              <h2 className="pro">PRO</h2>
              <li> Unlimited access to all Pro gyms and at-home workouts</li>
            </div>
            <div className="card">
              <h4>Buildpass</h4>
              <h2 className="select">SELECT</h2>
              <li> Unlimited access to single center and at-home workouts</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
