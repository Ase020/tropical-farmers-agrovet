import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partner.css';

import {
    bidcoLogo,
    kenyaSeed,
    modernWays,
    pembeFeeds,
    sigma,
    ungaFarmcare,
    vital,
} from '../../assets/partner-logos/index.js';

const Partners = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        ref: sliderRef,
    };

    return (
        <div className='agrovet-slider'>
            <h1>Our Partners</h1>
            <div className='divider'></div>
                <p>
                    Our company is comprised of highly skilled professionals who are committed 
                    to driving impact in  agriculture sector. We are dedicated to managing 
                    viable agriculture projects and delivering value-added products using our 
                    full-time employees and on-call experts. Moreover, we possess the capability 
                    to distribute products from the following companies with ease;
                </p>

                
            

                {/* TODO: Add links of the companies inside slider */}
                
            
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='img-logo'>
                        <img className="img-logos" src={bidcoLogo} alt="Bidco" />
                    </div>
                    <div className='img-logo'>
                        <img className="img-logos" src={modernWays} alt="Modern Ways" />
                    </div>
                    <div className='img-logo'>
                        <img className="img-logos" src={sigma} alt="Sigma" />
                    </div><div className='img-logo'>
                        <img className="img-logos" src={kenyaSeed} alt="Kenya Seed" />
                    </div>
                    <div className='img-logo'>
                        <img className="img-logos" src={ungaFarmcare} alt="Unga Farmcare" />
                    </div>
                    <div className='img-logo'>
                        <img className="img-logos" src={vital} alt="Vital" />
                    </div>
                    <div className='img-logo'>
                        <img className="img-logos" src={pembeFeeds} alt="Pembe Feeds" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Partners;