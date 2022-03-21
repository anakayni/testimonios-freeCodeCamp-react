import React from 'react'
import '../stylesheet/Testimonials.css'

function Testimonials(props) {
  return (
    <div className='container-testimonials'>
      <img 
        className='image-testimonials'
        src={require(`../img/${props.image}.png`)}
        alt='Foto de Emma'/>
      <div className='container-text-testmonials'>
        <p className='name-testimonials'><strong>{props.name}</strong> en {props.country}</p>
        <p className='job-testimonials'>{props.job} en <strong>{props.company}</strong></p>
        <p className='text-testimonials'>"{props.testimonial}"</p>
      </div>
    </div>
  )
}

export default Testimonials
