
import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import "./Carousel.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const Carousel = (props, slidesToShow=3) => {
  const [imageIndex, setImageIndex] = useState(0);
  const ceva = props.myData;

  const videos = props.myData;

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
   const realUrl=`https://www.youtube.com/embed/`
  const templateImages = Object.values(ceva).map((item, idx) => {
    if (item !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={item.videoId}
        >
          <div className="slideWrapper">
            {/* {realUrl+item.videoId ? realUrl+item.videoId : <img src={realUrl+item.videoId} alt='' />} */}
            <iframe width="560" 
          height="315" 
          src={realUrl+item.videoId}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          >
        </iframe>
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
  // return <div>ceva
  //   {Object.values(ceva).map((item)=>console.log(realUrl+item.videoId))}
  // </div>
};

export default Carousel;
