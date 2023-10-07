// import React from 'react';
import './about.css';


import {
    Vision,
    Mission,
} from "../../assets/about/index"

function AboutSection() {
    return (
        <div className="about-section">
            {/* <div className="circle"></div> */}
            <div className="about-title">
                <h1>About Us</h1>
                <div className="divides"></div>
            </div>
            <div className="aboutUs">
                <p>
                    Tropical Farmers Agrovet Ltd Co Ltd is a Private Limited Company
                    established under the Company&apos;s Act 2015, Laws of Kenya. It was 
                    officially registered 5th  February 2021 to carry out agriculture related 
                    business like Crop farming, Livestock Farming, Trading of agricultural 
                    products and other agriculture related business. The company started 
                    operation in 2021 to date. The Company is Located in Kericho County, 
                    Kericho town along Kenyatta Street next to Kenya Highlands Sacco.
                </p>
            </div>
            <div className="connector"></div>
            <div className="content" data-aos="zoom-out">
                <h2>ROLE</h2>
                <p>
                    Our role in this market is to ensure that smallholder farmers are
                    adequately linked to the market where they can reap good returns from
                    their produce, and reduce post-harvest losses.
                </p>
            </div>
            {/* <div className="connector"></div> */}
            <div className="mis-vis">
                <div className="contents" data-aos="zoom-in">
                    <img src={Vision} alt="Vision"/>
                    <h2>Our Vision</h2>
                    <p>
                        To partner with both governmental and non-governmental entities in
                        order to achieve food security and sustainability.
                    </p>
                </div>
            {/* <div className="connector"></div> */}
                <div className="contents" data-aos="zoom-in">
                    <img src={Mission} alt="Mission"/>
                    <h2>Our Mission</h2>
                    <p>
                        To provide the best practices in the industry that guarantees quality
                        and safe farm produce, and improve the lives of farmers.
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default AboutSection;
