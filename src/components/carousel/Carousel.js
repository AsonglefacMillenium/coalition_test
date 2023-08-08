import React from "react";
import "./carousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionOneImage, SectionTwoImage } from "../../images";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <div className="slider">
      <Carousel
        className="slider_wrapper"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        rtl={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        //containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        <div>
          <img src={SectionOneImage} alt="" />
        </div>
        <div>
          <img src={SectionTwoImage} alt="" />
        </div>
        <div>
          <img src={SectionOneImage} alt="" />
        </div>
        <div>
          <img src={SectionTwoImage} alt="" />
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Slider;
