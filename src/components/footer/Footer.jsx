import { Link } from "react-router-dom";
import {
  facebook,
  whatsApp,
  twitter,
  instagram,
  youtube,
  tropicalLogo,
} from "../../assets";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links-container">
        <div className="footer-links-logo-wrapper">
          <img src={tropicalLogo} alt="footer-logo" className="footer-logo" />
          <div className="footer-links">
            <Link to="/">Lifestyle</Link>
            <Link to="/">Pricing</Link>
            <Link to="/">Features</Link>
            <Link to="/">Class</Link>
            <Link to="/">Download</Link>
          </div>
        </div>

        <div className="footer-contact-us">
          <h4 className="footer-contact-header">Address</h4>

          <div className="footer-contact-address-wrapper">
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
            />
          </div>
        </div>
      </div>

      <div className="footer-copyright-social-links">
        <div className="footer-copyright">
          Copyright © 2023 Tropical Farmers Agrovet PLC. All rights reserved
        </div>
        <div className="footer-social-links">
          <Link to="/">
            <img
              src={facebook}
              alt="facebook"
              className="footer-social-link" />
          </Link><Link to="/">
            <img
              src={whatsApp}
              alt="whatsApp"
              className="footer-social-link" />
          </Link>
          <Link to="/">
            <img 
              src={twitter} 
              alt="twitter" 
              className="footer-social-link" 
            />
          </Link>
          <Link to="/">
            <img
              src={instagram}
              alt="instagram"
              className="footer-social-link"
            />
          </Link><Link to="/">
            <img
              src={youtube}
              alt="youtube"
              className="footer-social-link" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;























// import "./footer.css";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light">
//       <div className="container">
//         <div className="footer-items">
//           <div className="row">
//             <div className="item">
//               <div className="about">
//               <h2>About Us</h2>
//                 <img src="tropical-logo.png" alt="Tropical-Logo"></img>
//                 <h3>Tropical Farmers Agrovet</h3>
//                 <p>
//                   Tropical Farmers Agrovet Ltd Co Ltd is a Private Limited Company 
//                   established under the Company&apos;s Act 2015, Laws of Kenya 
//                   registered 5th February 2021 to carry out agriculture related 
//                   business like Crop farming, Livestock Farming, Trading of 
//                   agricultural products and other agriculture related business. 
//                   The company started operation in 2021 to date.
//                 </p>
//                 <form action="#">
//                   <input type="email" placeholder="Your email" className="form-control" name="email"></input>
//                   <button type="submit">Subscribe</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;