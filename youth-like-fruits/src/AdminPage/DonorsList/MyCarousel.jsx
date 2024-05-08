import React from 'react'
import Carousel from 'react-multi-carousel';
import RequestCard from './RequestCard'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default function MyCarousel() {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

    return (
      <div style={{maxWidth: '80%' , marginLeft: '8%' , marginTop: '26%' , marginBottom: '2%'}}>
        <Slider {...settings}>
        <RequestCard></RequestCard>
        <RequestCard></RequestCard>
        <RequestCard></RequestCard>
        <RequestCard></RequestCard>
        <RequestCard></RequestCard>
        <RequestCard></RequestCard>
        <RequestCard></RequestCard>
        </Slider>
      </div>
    )
}
