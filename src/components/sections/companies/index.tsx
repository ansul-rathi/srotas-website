"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/Apple.svg"
    },
    {
        imgSrc: "/images/Companies/CocaCola.svg"
    },
    {
        imgSrc: "/images/Companies/Samsung.svg"
    },
    {
        imgSrc: "/images/Companies/The Guardian.svg"
    },
    {
        imgSrc: "/images/Companies/The New York Times.svg"
    }
]

// CAROUSEL SETTINGS
export default class CompanySlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center bg-transparent'>
                <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i} className="flex items-center justify-center h-24">
                                    <div className="flex items-center justify-center w-full h-full px-4">
                                        <img 
                                            src={item.imgSrc} 
                                            alt={item.imgSrc} 
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}