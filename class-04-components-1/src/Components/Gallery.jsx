import React from 'react'
import './texts.css';
import image from '../assets/project-6.jpg';
import './gallery.css';
const Gallery = () => {
  return (
    <div>
        <h1>Gallery page</h1>
        <p>This is Gallery page component</p>
        <img className='gallery-img' src={image} />
    </div>
  )
}

export default Gallery