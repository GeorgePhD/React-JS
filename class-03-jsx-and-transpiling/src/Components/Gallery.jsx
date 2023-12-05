
import Img from '../assets/project-6.jpg'
import Img2 from '../assets/react.svg'
import './Gallery.css'
const Gallery = () => {

    return (
        <div className='gallery-container'>
            <h2>Gallery</h2>
            <img className='gallery-img-react-logo' src={Img2} />
            <img className='gallery-img' src={Img} />
        </div>
    )
}

export default Gallery