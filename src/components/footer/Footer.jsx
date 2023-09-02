import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import {  tropicalLogo, sendMail } from "../../assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-logo-wrapper">
          <img src={tropicalLogo} alt="Tropical-logo" className="footer-logo" />
          <h4 className="footer-contact-header">Explore</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/">Products</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contacts</Link>
          </div>
          <div className="mis-vis-container">
          <h4 className="footer-contact-header">About</h4>
          <div className="mis-vis">
            <ul>
              <li>
                <strong className="str">Vision: </strong>
                  <p>To partner with governmental and non-governmental entities to achieve food security and sustainability</p>
              </li>
              <br />
                <li>
                  <strong className="str">Mision: </strong>
                  <p>To provide the best practices  in the industry that guarantees quality and safe farm produce, and to improve the lives of farmers</p>
                </li>
            </ul>
          </div>
        </div>
        </div>
        
        <div className="footer-contact-us">
          <div className="footer-contact-address-wrapper">
            <h4 className="footer-contact-header">Address</h4>
            <p className="footer-contact-address">Kenyatta Street next to<br /> Kenya Highlands Sacco. </p>
            <p className="footer-contact-address">Kericho Town</p>
            <p className="footer-contact-address">Kericho, Kenya</p>
            <p className="footer-contact-address">+254 740 522124</p>
            <p className="footer-contact-address">+254 723 494317</p>
          </div>
          <div>
            <iframe className="footer-iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3989.7348733198296!2d35.28065317474492!3d-0.3705674353103748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F-1.3034475%2C36.7927213%2Ftropical%2Bfarmers%2Bagrovet%2Bkericho%2F%40-0.7342022%2C34.6595633%2C8z%2Fdata%3D*213m1*214b1*214m9*214m8*211m1*214e1*211m5*211m1*211s0x182a57d182d14019%3A0x27ce1cefba07ca6f*212m2*211d35.2832281*212d-0.3705728%3Fentry%3Dttu!5e0!3m2!1sen!2ske!4v1693433452965!5m2!1sen!2ske"
              width="450"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
        <div className="footer-newsletter">
          <h4 className="footer-contact-header">Newsletter</h4>
          <p className="footer-newsletter-desc">
            Subscribe to our newsletter for offers from our store.
          </p>
          <div className="footer-newsletter-email-wrapper">
            <input
              type="text"
              placeholder="Enter your email"
              className="footer-newsletter-email"
              required="true"
            />
            <img src={sendMail} alt="send" className="newsletter-btn" />
          </div>
        </div>
      </div>
      <div className="footer-copyright-social-links">
        <div className="footer-social-links">
          <a href="https://web.facebook.com/TropicalAgrovet" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-social-link" color="#7ea3cc" />
          </a>
          <a href="https://wa.me/254740522124" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="footer-social-link" color="#25d366" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-social-link" color="#1da1f2" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-social-link" color="#e1306c" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="footer-social-link" color="#ff0000" />
          </a>
        </div>
        <div className="footer-copyright">
          Copyright © 2023 Tropical Farmers Agrovet, PLC. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;