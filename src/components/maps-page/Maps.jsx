// import React from "react";
import "./maps.css";

const Maps = () => {

    return (
        <div className="map-container">
            <div className="map-loc">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7348733198296!2d35.28346413439277!3d-0.37047087819062796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a57d182d14019%3A0x27ce1cefba07ca6f!2sTropical%20Farmers%20Agrovet%20Ltd!5e0!3m2!1sen!2ske!4v1693822502516!5m2!1sen!2ske"
                width="100%"
                height="500px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
            <div className="loc-data">
                <div className="loc-data-item">
                    <h4>Our main Branch</h4>
                    <p>
                        
                    </p>
                
                </div>
            </div>
        </div>
        
        
    );
};

export default Maps;