import React from 'react'
import '../stylesheets/AccommodationFilter.css'

function AccommodationFilter() {
  return(

    <form className='filter-container'>
      
      <div className='bedroom-container'>
        <label for="select-bedrooms">Bedroom</label>
        <select className='select-bedrooms'>
          <option value="">Bedroom</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7+</option>
        </select>
      </div>
      
      <div className='bathroom-container'>
        <label for="select-bathrooms">Bathroom</label>
        <select className='select-bathrooms'>
          <option value="">Bathroom</option>
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
      </div>
      
      <div className='max-price-container'>
        <label for='select-max-price'>Max Price</label>
        <select className='select-max-price'>
          <option value="">Max Price</option>
          <option>0-50</option>
          <option>51-100</option>
          <option>101-150</option>
          <option>151+</option>
        </select>
      </div>
      
      <div className='home-type-container'>
        <label for='select-home-type'>Home Type</label>
        <select className='select-home-type'>
          <option value="">Home Type</option>
          <option>Detached</option>
          <option>Semi-Detached</option>
          <option>Apartment</option>
        </select>
      </div>
      
    </form>
)
}

export default AccommodationFilter