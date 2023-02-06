import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

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
    <wrap >
        <img src="/images/slider-badging.jpg" />
    </wrap>
    </Carousel>
  )
}

export default ImgSlider
const Carousel = styled(Slider)`
`
const Wrap =styled.div`
`