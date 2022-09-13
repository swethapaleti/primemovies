import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
  }

  return (
    <div className="slider">
      <Slider {...settings}>
        {movies.map(each => (
          <MovieItem item={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
