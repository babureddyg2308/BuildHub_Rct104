import React from "react";
import "./index.css";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import BuildHubLogo from "../assets/BuildHub_logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src={BuildHubLogo} alt="logo" className="logo" />
      </Link>

      <div className="texts">
        <Link to="/fitness">FITNESS</Link>
        <Link to="/sports">SPORTS</Link>
        <Link to="/care">CARE</Link>
        <Link to="/mind">MIND</Link>
        <Link to="/store">STORE</Link>
      </div>

      <div className="navbar-right">
        <Link to="/location" className="nav-link">
          <FaMapMarkerAlt /> CITY
        </Link>
        <Link to="/get-app" className="get-app-btn">
          GET APP
        </Link>
        <Link to="/login" className="login-icon">
          <FaUser />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
