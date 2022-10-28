import React from 'react'
import AccommodationCard from './AccommodationCard'
import '../stylesheets/AccommodationFilter.css'

function AccommodationFilter({bedroomFilter, bathroomFilter, priceFilter, typeFilter}) {

  return(

    <div className='filter-container'>
      
      <div className='bedroom-container'>
        <label for="select-bedrooms">Bedroom</label>
        <select className='select-bedrooms' onChange={bedroomFilter}>
          <option value=''>Bedroom</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </select>
      </div>
      
      <div className='bathroom-container'>
        <label for="select-bathrooms">Bathroom</label>
        <select className='select-bathrooms' onChange={bathroomFilter}>
          <option value="">Bathroom</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      
      <div className='max-price-container'>
        <label for='select-max-price'>Max Price</label>
        <select className='select-max-price' onChange={priceFilter}>
          <option value={100000}>Max Price</option>
          <option>500</option>
          <option>1000</option>
          <option>1500</option>
          <option>2000</option>
          <option>2500</option>
          <option>3000</option>
        </select>
      </div>
      
      <div className='home-type-container'>
        <label for='select-home-type' onChange={typeFilter}>Home Type</label>
        <select className='select-home-type'>
          <option value="">Home Type</option>
          <option>Detached</option>
          <option>Semi-Detached</option>
          <option>Apartment</option>
        </select>
      </div>
      
    </div>
)
}

export default AccommodationFilter