import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './partner.css';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
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

                <div className='slider-arrows'>
                    <div 
                        className='swiper-prev'
                        tabIndex='0'
                        role='button'
                        aria-label='Previous slide'
                        onClick={goToPrevSlide}
                    >
                        <FontAwesomeIcon aria-hidden="true" icon={faAngleLeft} />
                    </div>

                    <div
                        className='swiper-next'
                        tabIndex='0'
                        role='button'
                        aria-label='Next slide'
                        onClick={goToNextSlide}
                    >
                        <FontAwesomeIcon aria-hidden="true" icon={faAngleRight} />
                    </div>
                </div>
            

                {/* TODO: Add link to the list of companies inside slider */}
                
                <div className='slick-track'>

                <Slider {...settings}>
                    <div className='img-logo'>
                        <img src={bidcoLogo} alt="Bidco" />
                    </div>
                    <div className='img-logo'>
                        <img src={kenyaSeed} alt="Kenya Seed" />
                    </div>
                    <div className='img-logo'>
                        <img src={modernWays} alt="Modern Ways" />
                    </div>
                    <div className='img-logo'>
                        <img src={pembeFeeds} alt="Pembe Feeds" />
                    </div>
                    <div className='img-logo'>
                        <img src={sigma} alt="Sigma" />
                    </div>
                    <div className='img-logo'>
                        <img src={ungaFarmcare} alt="Unga Farmcare" />
                    </div>
                    <div className='img-logo'>
                        <img src={vital} alt="Vital" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Partners;