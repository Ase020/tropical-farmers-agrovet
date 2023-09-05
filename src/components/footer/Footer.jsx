import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { tropicalLogo, sendMail } from "../../assets";
import "./footer.css";
// import { useEffect } from 'react';

const Footer = () => {
  // useEffect(() => {
  //   console.log(window.google);
  //   function initMap() {
  //     var map = new window.google.maps.Map(document.getElementsByClassName("footer-iframe-map")[0], {
  //       zoom: 15,
  //       center: { lat: -0.37047087819062796, lng: 35.28346413439277 },
  //     });

  //     var marker = new window.google.maps.Marker({
  //       position: { lat: -0.37047087819062796, lng: 35.28346413439277 },
  //       map: map,
  //       icon: {
  //         url: "https://maps.google.com/mapfiles/kml/paddle/red-stars.png", // Custom marker icon to highlight exact location
  //         size: new window.google.maps.Size(32, 32),
  //         origin: new window.google.maps.Point(0, 0),
  //         anchor: new window.google.maps.Point(16, 32),
  //         scaledSize: new window.google.maps.Size(32, 32)
  //       },
  //     });

  //     animateMarker(marker);
  //   }

  //   function animateMarker(marker) {
  //     marker.setAnimation(window.google.maps.Animation.BOUNCE); // Makes the marker location bounce for precision
  //   }

  //   initMap();
  // }, []);

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
            <p className="footer-contact-address">+254 740 522124, <span className="loc">Kco </span></p>
            <p className="footer-contact-address">+254 756 522124, <span className="loc">Litein</span></p>
          </div>
          <div>
            <iframe className="footer-iframe-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7348733198296!2d35.28346413439277!3d-0.37047087819062796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a57d182d14019%3A0x27ce1cefba07ca6f!2sTropical%20Farmers%20Agrovet%20Ltd!5e0!3m2!1sen!2ske!4v1693822502516!5m2!1sen!2ske"
              width="450"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
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
              required={true}
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