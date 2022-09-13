import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl} = item
  return (
    <Popup
      modal
      className="popup-content"
      trigger={<img src={thumbnailUrl} alt="thumbnail" />}
    >
      {close => (
        <div className="bg-color">
          <button className="btn" type="button" onClick={close}>
            <IoMdClose />
          </button>
          <ReactPlayer url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
