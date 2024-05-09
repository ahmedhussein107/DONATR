import React , {useState} from 'react'
import RequestCard from './RequestCard'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import PropTypes from 'prop-types';
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export default function MyCarousel({listOfCards}) {

  const [current , setCurrent] = useState(0);

  const increament = () => {
    setCurrent(min(current +1 , listOfCards.length));
  }

  const decreament = () => {
    setCurrent(max(current -1 , 0));
  }

  const cards = listOfCards.map(card => {
    <RequestCard date = {card.date} name = {card.name} image = {card.image}/>
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div style={{maxWidth: '80%' , marginLeft: '8%' , marginTop: '26%' , marginBottom: '2%'}}>
      <Slider {...settings }>
      {cards}
      </Slider>
    </div>
  )
}

MyCarousel.propTypes = {
  listOfCards: PropTypes.array
};

MyCarousel.defaultProps = {
  listOfCards: []
};
