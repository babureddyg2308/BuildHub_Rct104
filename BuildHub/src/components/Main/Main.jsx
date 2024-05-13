import React from "react";
import "./main.css";
import backgroundImage from "/public/images/background_image.webp";
import cardImage1 from "/public/images/image1.webp";
import cardImage2 from "/public/images/image2.webp";
import cardImage3 from "/public/images/image3.webp";
import cardImage4 from "/public/images/image4.webp";
import cardImage5 from "/public/images/weight_image.webp";
import cardImage6 from "/public/images/glass_image.webp";
import cardImage7 from "/public/images/girl_image.webp";
import cardImage8 from "/public/images/build_card.jpg";
import smallCardImage1 from "/public/images/appstore.webp";
import smallCardImage2 from "/public/images/googleplay.webp";

const Main = () => {
  return (
    <div
      className="main container section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3 className="sectTitle">Build Pass</h3>
      <button className="learnMoreButton">Learn More</button>
      <div className="cardContainer">
        {/* Card 1 */}
        <div
          className="card card1"
          style={{ backgroundImage: `url(${cardImage1})` }}
        >
          <div className="cardContent">
            <p>BuildPass</p>
            <h1 className="elite">ELITE</h1>
          </div>
          <div className="cardDetails">
            <h2>Unlimited access to</h2>
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="card card2"
          style={{ backgroundImage: `url(${cardImage2})` }}
        >
          <div className="cardContent">
            <p>BuildPass</p>
            <h1 className="pro">PRO</h1>
          </div>
          <div className="cardDetails">
            <h2>Unlimited access to</h2>
            <li>All PRO gyms</li>
            <li>2 Sessions/month at ELITE gyms & group classes</li>
            <li>At-home live workouts</li>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="card card3"
          style={{ backgroundImage: `url(${cardImage3})` }}
        >
          <div className="cardContent">
            <p>BuildPass</p>
            <h1 className="play">PLAY</h1>
          </div>
          <div className="cardDetails">
            <h2>Unlimited access to</h2>
            <li>Badminton, Swimming & other sports</li>
            <li>Guaranteed playing partner</li>
            <li>Guided sessions with experts</li>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="card card4"
          style={{ backgroundImage: `url(${cardImage4})` }}
        >
          <div className="cardContent">
            <p>BuildPass</p>
            <h1 className="select">SELECT</h1>
          </div>
          <div className="cardDetails">
            <h2>Unlimited access to</h2>
            <li>One center that you choose</li> 
            <li>Limited sessions* in other centers & gyms in your city</li> 
            <li>At-home live workouts</li>
          </div>
        </div>
      </div>
      <div className="buttonsContainer">
        <button className="mainButton whiteButton">TRY FOR FREE</button>
        <button className="mainButton redButton">LEARN MORE</button>
      </div>
      <div className="card-container">
        <div className="Card" style={{ backgroundImage: `url(${cardImage5})` }}>
          <h1>Build Transform</h1>
          <p>Get coached to lose weight for good</p>
        </div>
        <div className="Card" style={{ backgroundImage: `url(${cardImage6})` }}>
          <h1>The .fit way</h1>
          <p>Making health easy, one day at a time</p>
        </div>
        <div className="Card" style={{ backgroundImage: `url(${cardImage7})` }}>
          <h1>Workout Gear</h1>
          <p>Everything you need for your workout</p>
        </div>
        <div className="Card" style={{ backgroundImage: `url(${cardImage4})` }}>
          <h1>Sugar .fit</h1>
          <p>Reverse Type 2 Diabetes and Prediabetes</p>
        </div>
      </div>
      <div
        className="Card-content"
        style={{ backgroundImage: `url(${cardImage8})` }}
      >
         
        <div className="main-content">
          <h1 style={{color:'white ', fontSize:'50px'}}>Download the most loved fitness app</h1>
          <p style={{color:'white', fontSize:'40px'}}>Start your fitness journey with us. Join BuildHub!</p>
        </div>
        <div className="Footer">
          <div
            className="small-card"
            style={{ backgroundImage: `url(${smallCardImage1})` }}
          ></div>
          <div
            className="small-card"
            style={{ backgroundImage: `url(${smallCardImage2})` }}
          ></div>
        </div>
      </div>
      <div className="text">
        <span className>Join the BuildHub family!</span>
      </div>
    </div>
  );
};

export default Main;
