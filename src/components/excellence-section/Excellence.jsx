// import React from 'react';
import './excellence.css';

import {
    Expertise,
    Community,
    Pricing,
    Quality,
    Service,
    Sustainability,
} from "../../assets/why-us/index"

const Excellence = () => (

    <>
        <div className="info-header">
            <h1>Why Choose Us?</h1>
            <div className="divider-exc"></div>
        </div>
        
        <div className="info-section">
            <div className="info-container" data-aos="fade-up">
                <div className="info-img"><img src={Expertise} alt="Expertise" /></div>
                <h2>Expertise</h2>
                <p>
                    We have years of experience in the agri-inputs industry and can help you choose the right products to fit your needs.
                </p>
            </div>
            <div className="info-container" data-aos="fade-up">
                <div className="info-img"><img src={Quality} alt="Quality" /></div>
                <h2>Quality</h2>
                <p>
                    Our high-quality products are backed by research and development, ensuring healthy crops and livestock.
                </p>
            </div>
            <div className="info-container" data-aos="fade-up">
                <div className="info-img"><img src={Service} alt="Service" /></div>
                <h2>Service</h2>
                <p>
                    We provide exceptional customer service and are always here to help with any questions or concerns.
                </p>
            </div>
            <div className="info-container" data-aos="fade-up">
                <div className="info-img"><img src={Pricing} alt="Pricing" /></div>
                <h2>Pricing</h2>
                <p>
                    We offer competitive pricing on all of our products, so you can get quality without breaking the bank.
                </p>
            </div>
            <div className="info-container" data-aos="fade-up">
                <div className="info-img"><img src={Community} alt="Community" /></div>
                <h2>Community</h2>
                <p>
                    We are committed to supporting our local community by sourcing our products locally and giving back.
                </p>
            </div>
            <div className="info-container" data-aos="fade-up">
                <div className="info-img"><img src={Sustainability} alt="Sustainability" /></div>

                <h2>Sustainability</h2>
                <p>
                    We believe in promoting sustainable farming practices for a better future.
                </p>
            </div>
        </div>
    </>

);

export default Excellence;
