import React from "react";
import "./body.css";
import backgroundImage from "/public/images/background_image.webp";

const Body = () => {
  const bodyStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="card-container" style={bodyStyle}>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
    </div>
  );
};

export default Body;
