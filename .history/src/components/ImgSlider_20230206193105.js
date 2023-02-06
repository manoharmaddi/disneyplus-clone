import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots:true,
        infinite: true,
        speed:500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: true,

    }
  return (
    <Carousel {...settings} >  Image Slider

    </Carousel>
  )
}

export default ImgSlider
const Carousel = styled(Slider)`
`
