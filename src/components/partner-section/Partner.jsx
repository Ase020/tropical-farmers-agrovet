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

const AgrovetSlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
                    Our company has ensured adequate provision of human resources and 
                    equipment to cater to the diverse needs of our customers, ranging 
                    from simple to complex requirements. We operate in accordance with 
                    the labor laws, ensuring compliance and ethical standards. Our communication 
                    channels are efficient, and we have a prompt response system in place for 
                    urgent situations. Moreover, we possess the capability to distribute 
                    products from the following companies with ease:
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
                
                <Slider {...settings}>
                    <div>
                        <img src={bidcoLogo} alt="Bidco" />
                    </div>
                    <div>
                        <img src={kenyaSeed} alt="Kenya Seed" />
                    </div>
                    <div>
                        <img src={modernWays} alt="Modern Ways" />
                    </div>
                    <div>
                        <img src={pembeFeeds} alt="Pembe Feeds" />
                    </div>
                    <div>
                        <img src={sigma} alt="Sigma" />
                    </div>
                    <div>
                        <img src={ungaFarmcare} alt="Unga Farmcare" />
                    </div>
                    <div>
                        <img src={vital} alt="Vital" />
                    </div>
                </Slider>

        </div>
    );
};

export default AgrovetSlider;