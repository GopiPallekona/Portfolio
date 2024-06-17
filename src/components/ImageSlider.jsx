import React from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index}`} className="slide-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
