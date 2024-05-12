import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo-container">
          <img
            src="../images/BuildHub_logo.jpeg"
            alt="cult.fit logo"
            className="footer-logo"
          />
          <p className="footer-description">
            At BuildHub, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, Medical & lifestyle care
            hassle-free.#BeBetterEveryDay
          </p>
        </div>
        <div className="footer-links-container">
          <div className="footer-links">
            <h4>BuildHub.fit For Business</h4>
            <a href="#">partner.fit</a>
            <a href="#">cult.fit franchise</a>
            <a href="#">corporate partnerships</a>
            <a href="#">cult pass network</a>
            <a href="#">t&c for business</a>
          </div>
          <div className="footer-links">
            <h4>Explore</h4>
            <a href="#">blogs</a>
            <a href="#">careers</a>
            <a href="#">privacy policy</a>
            <a href="#">Build bmi calculator</a>
            <a href="#">terms & conditions</a>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <a href="#">contact us</a>
            <a href="#">security</a>
          </div>
        </div>
        <div className="footer-app-links">
          <a href="#" className="app-store-link">
            <img src="../images/appstore.webp" alt="App Store" />
          </a>
          <a href="#" className="google-play-link">
            <img src="../images/googleplay.webp" alt="Google Play" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
