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
      <header className="header flex">
        <div className="image">
          <img src="../contents/BuildHub_logo.jpeg" alt="" />
        </div>
        <div className="navlist flex">
          <li className="navItem">
            <a href="#" className="navLink">
              FITNESS
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              SPORTS
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              CARE
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
              MIND
            </a>
          </li>
          <li className="navItem">
            <a href="#" className="navLink">
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
          <FaUser className="login-icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;