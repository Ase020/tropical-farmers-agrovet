// import React from "react";
import "./maps.css";

import { phone, loc, mail } from "../../assets/maps-data/index";

const Maps = () => {
    return (
        <div className="map-container">
            <h2>Our Branches</h2>
            <div className="divider-maps"></div>
            <h3>Kericho Town (main)</h3>
            <div className="map-info">
                <div className="map-kco">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7348733198296!2d35.28346413439277!3d-0.37047087819062796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a57d182d14019%3A0x27ce1cefba07ca6f!2sTropical%20Farmers%20Agrovet%20Ltd!5e0!3m2!1sen!2ske!4v1693822502516!5m2!1sen!2ske"
                        width="100%"
                        height="550px"
                        style={{ borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="branch">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img className="maps-data" src={loc} alt="location" />
                            <h4>LOCATION</h4>
                            <p>Kericho, Kenya
                            <br />
                                Kericho Town
                                along Kenyatta Street <br />next to Kenya Highlands Sacco.
                            </p>
                        </div>
                        <div className="contact-info-item">
                            <img className="maps-data" src={phone} alt="phone number" />
                            <h4>PHONE</h4>
                            <p>+254 740522124</p>
                        </div>
                        <div className="contact-info-item">
                            <img className="maps-data" src={mail} alt="email address" />
                            <h4>EMAIL</h4>
                            <p>tropicalfarmersagrovet@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Litein Branch</h3>
            <div className="map-info">
                <div className="branch">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img className="maps-data" src={loc} alt="location" />
                            <h4>LOCATION</h4>
                            <p>Litein, Kericho, Kenya
                                <br />
                                Litein Town
                                along Kaplong-Litein Road
                            </p>
                        </div>
                        <div className="contact-info-item">
                            <img className="maps-data" src={phone} alt="phone number" />
                            <h4>PHONE</h4>
                            <p>+254 756522124</p>
                        </div>
                        <div className="contact-info-item">
                            <img className="maps-data" src={mail} alt="email address" />
                            <h4>EMAIL</h4>
                            <p>tropicalfarmersagrovet@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="map-ltn">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6697.51964554495!2d35.18938101972945!3d-0.5864289634727451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b0738a3eddd1b%3A0x5c75ca9f352b3a0d!2sTropical%20Farmers%20Agrovet-Litein!5e0!3m2!1sen!2ske!4v1698182439380!5m2!1sen!2ske"
                        width="100%"
                        height="550px"
                        style={{ borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default Maps;




// for (let i = 0; i<=100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }else if (i % 3 === 0) {
//         console.log("Fizz");
//     }else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }