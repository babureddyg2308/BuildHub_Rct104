import React from "react";
import "./index.css";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import BuildHubLogo from "../assets/BuildHub_logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <a href="/" className="logo-link">
        <img src={BuildHubLogo} alt="logo" className="logo" />
        {/* //  <span className="logo-text">BuildHub</span> */}
      </a>

      <ul className="texts">
        <a href="#fitness">FITNESS</a>

        <a href="#sports">SPORTS</a>

        <a href="#care">CARE</a>

        <a href="#mind">MIND</a>

        <a href="#store">STORE</a>
      </ul>

      <div className="navbar-right">
        <a href="#location" className="nav-link">
          <FaMapMarkerAlt /> CITY
        </a>
        <a href="#get-app" className="get-app-btn">
          GET APP
        </a>
        <a href="#login" className="login-icon">
          <FaUser />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
