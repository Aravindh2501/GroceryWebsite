import React from 'react';
import Slider from "react-slick";
import { RiStarFill } from '@remixicon/react';
import apple from "../../Assets/images/apple.svg";
import carrot from "../../Assets/images/carrot.svg";
import spinash from "../../Assets/images/spinash.svg";
import potato from "../../Assets/images/potato.svg";
import peech from "../../Assets/images/peech.svg";
import orange from "../../Assets/images/orange.svg";
import meat from "../../Assets/images/meat.svg";
import starberry from "../../Assets/images/strawberrry.svg";

const FruitsSection = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#3BB77E", color: "#DEF9EC" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#3BB77E", color: "#DEF9EC" }}
                onClick={onClick}
            />
        );
    }



    const fruits = [
        { color: "#FEEFEA", name: "Apple", image: apple, price: 1.50, review: 4, seller: "FreshFruits" },
        { color: "#FFF3FF", name: "Carrot", image: carrot, price: 0.75, review: 3.5, seller: "OrganicFarmers" },
        { color: "#F2FCE4", name: "Spinach", image: spinash, price: 2.00, review: 4.5, seller: "GreenGardens" },
        { color: "#FEEFEA", name: "Potato", image: potato, price: 1.20, review: 4, seller: "LocalProduce" },
        { color: "#ECFFEC", name: "Peach", image: peech, price: 1.80, review: 4.2, seller: "OrchardFresh" },
        { color: "#FFFCEB", name: "Orange", image: orange, price: 1.30, review: 4.3, seller: "CitrusFarms" },
        { color: "#DEF9EC", name: "Meat", image: meat, price: 5.50, review: 4.7, seller: "ButcherShop" },
        { color: "#FEEFEA", name: "Strawberry", image: starberry, price: 2.50, review: 4.8, seller: "BerryFarm" },
        { color: "#F2FCE4", name: "Peach", image: peech, price: 1.80, review: 4.2, seller: "OrchardFresh" },
        { color: "#FFF3FF", name: "Orange", image: orange, price: 1.30, review: 4.3, seller: "CitrusFarms" },
        { color: "#FFFCEB", name: "Meat", image: meat, price: 5.50, review: 4.7, seller: "ButcherShop" },
        { color: "#DEF9EC", name: "Strawberry", image: starberry, price: 2.50, review: 4.8, seller: "BerryFarm" }
    ];

    var settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='fruitsection'>

            <h2 className='fruit_head'>Popular Prodcuts</h2>

            <div className="slider-container">
                <Slider {...settings}>
                    {fruits.map((fruit, index) => (
                        <div key={index} className='fruit_main'>
                            <div className="fruit_card" style={{ background: fruit.color }}>
                                <center>
                                    <img src={fruit.image} alt={fruit.name} className='fruit_img' />
                                </center>
                                <h3 className='fruit_title'>{fruit.name}</h3>
                                <div className="fruit_text">
                                    <p className='fruit_review'>{fruit.review} <RiStarFill className='fruit_star' /></p>
                                    <p className='fruit_seller_name'>{fruit.seller}</p>
                                </div>
                                <p className='fruit_price'>$ <span className='price_val'>{fruit.price.toFixed(2)}</span></p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default FruitsSection;
