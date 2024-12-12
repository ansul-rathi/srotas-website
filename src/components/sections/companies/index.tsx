"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
];

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
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1536, // 2xl
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1280, // xl
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024, // lg
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768, // md
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 640, // sm
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        autoplaySpeed: 3000,
                    }
                }
            ]
        };

        return (
            <div className="w-full bg-transparent">
                <div className="max-w-[100%] mx-auto py-8 sm:py-12 md:py-16">
                    <Slider {...settings}>
                        {data.map((item, i) => (
                            <div key={i} className="outline-none focus:outline-none">
                                <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-4">
                                    <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 lg:h-28">
                                        <Image
                                            src={item.imgSrc}
                                            alt={`Company logo ${i + 1}`}
                                            width={200}
                                            height={100}
                                            className="w-auto h-full object-contain filter brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                                            priority={i < 3}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </Slider>
                </div>
            </div>
        );
    }
}