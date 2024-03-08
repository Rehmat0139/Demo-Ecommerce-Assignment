import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{  padding: "20px", marginTop: "auto" }}>
      <div className="footer-container">
        <div className="footer-content">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit.</p>
        </div>
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <p>Stay connected on social media.</p>
        </div>
        <div className="footer-content">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for updates.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your E-Commerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
