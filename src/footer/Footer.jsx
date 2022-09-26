import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://github.com/sahilgogave"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sahilgogave/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/sahil_gogave/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
        </div>
        <span className="footer__copy">&#169;2022 Sahil Gogave</span>
      </div>
    </footer>
  );
};

export default Footer;
