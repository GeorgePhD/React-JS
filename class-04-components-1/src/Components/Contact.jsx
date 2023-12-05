import React from 'react'
import './texts.css';


const Contact = () => {

  const personaInfo = {
                    name: "George",
                    phone: "56922222222",
                    city: "Rancagua",
                    country: "Chile 💥",
                    age: 40,
                    email: "george@george.cl"
  }

  return (

    <div>
        <h1>Contact page</h1>
        <p>This is Contact page component</p>
        <p>name: {personaInfo.name}<br/>
        phone: {personaInfo.phone}<br/>
        city: {personaInfo.city}<br/>
        country: {personaInfo.country}<br/>
        age: {personaInfo.age}<br/>
        email: {personaInfo.email}</p>

    </div>

  )
}

export default Contact