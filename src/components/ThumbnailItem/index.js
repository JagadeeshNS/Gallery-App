// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesDetails, clickImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesDetails

  const style = isActive ? 'image-style' : ''

  const onClickImage = () => {
    clickImage(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`list_image ${style}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
