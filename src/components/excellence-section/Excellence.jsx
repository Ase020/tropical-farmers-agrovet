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

const Excellence = () => {
    
    return (
        <>
            <div className="info-header">
                <h1>Why Choose Us?</h1>
                <div className="divider"></div>
            </div>
            
            <div className="info-section">
                <div className="info-container">
                    <img src={Expertise} alt="Expertise" />
                    <h2>Expertise</h2>
                    <p>
                        We have years of experience in the agri-inputs industry and can help you choose the right products to fit your needs.
                    </p>
                </div>
                <div className="info-container">
                    <img src={Quality} alt="Quality" />
                    <h2>Quality</h2>
                    <p>
                        Our high-quality products are backed by research and development, ensuring healthy crops and livestock.
                    </p>
                </div>
                <div className="info-container">
                    <img src={Service} alt="Service" />
                    <h2>Service</h2>
                    <p>
                        We provide exceptional customer service and are always here to help with any questions or concerns.
                    </p>
                </div>
                <div className="info-container">
                    <img src={Pricing} alt="Pricing" />
                    <h2>Pricing</h2>
                    <p>
                        We offer competitive pricing on all of our products, so you can get quality without breaking the bank.
                    </p>
                </div>
                <div className="info-container">
                    <img src={Community} alt="Community" />
                    <h2>Community</h2>
                    <p>
                        We are committed to supporting our local community by sourcing our products locally and giving back.
                    </p>
                </div>
                <div className="info-container">
                    <img src={Sustainability} alt="Sustainability" />

                    <h2>Sustainability</h2>
                    <p>
                        We believe in promoting sustainable farming practices for a better future.
                    </p>
                </div>
            </div>
        </>
        
    );
};

export default Excellence;
