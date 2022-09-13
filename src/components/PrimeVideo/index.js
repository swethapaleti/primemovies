import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const action = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedy = moviesList.filter(each => each.categoryId !== 'ACTION')
  return (
    <div className="bg">
      <img
        className="width"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
      />
      <h1>Action Movies</h1>
      <MovieSlider movies={action} />
      <h1>Comedy Movies</h1>
      <MovieSlider movies={comedy} />
    </div>
  )
}

export default PrimeVideo
