import React, { useState } from "react";
import "./navbar.css";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [location, setLocation] = useState("BANGLORE");

  const handleLocationChange = () => {
    const newLocation = prompt("Enter new location:", location.toUpperCase());
    if (newLocation) {
      setLocation(newLocation.toUpperCase());
    }

    const promptDialog = document.querySelector(".prompt-background");
    if (promptDialog) {
      promptDialog.style.backgroundColor = "lightgray";
    }
  };

  return (
    <section>
      <header className="Header flex" style={{color:'white', width:''}}>
        <div className="image">
          <a href="/"> <img src="../contents/BuildHub_logo.jpeg" alt="" style={{width:'12vw',marginTop:'25px',borderRadius:'10px'}}/></a>
        </div>
        <div className="navlist flex">
          <li className="navItem">
            <a href="/fitnes" className="navLink">
              FITNESS
            </a>
          </li>
          <li className="navItem">
            <a href="/transform" className="navLink">
              TRANSFORM
            </a>
          </li>
          <li className="navItem">
            <a href="/care" className="navLink">
              CARE
            </a>
          </li>
          <li className="navItem">
            <a href="/mind" className="navLink">
              MIND
            </a>
          </li>
          <li className="navItem">
            <a href="/care" className="navLink">
              STORE
            </a>
          </li>
        </div>
        <div className="nav-right">
          <li
            to="/location"
            className="nav-link"
            onClick={handleLocationChange}
          >
            <FaMapMarkerAlt />
            {location}
          </li>
          <button className="btn">GET APP</button>
          
          <a href="/signin"><FaUser className="login-icon" /></a>
        </div>
      </header>
    </section>
  );
};

export default Navbar;


