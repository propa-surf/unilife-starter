import '../stylesheets/AccommodationFilter.css'
import {useNavigate} from 'react-router-dom'
import React, {useState} from 'react'

function AccommodationFilter({id, filterBedroom, filterProperties}) {

  const navigate = useNavigate()
  const bedroomOptions = [1,2,3,4,5,6,7,8,9]
  const priceOptions = [1000,1500,2000,2500,3000]
  const [bathroom, setBathroom] = useState(1)
  const [price, setPrice] = useState('')



  return(

    <div className='filter-container'>
      
      <div className='bedroom-container'>
        <label htmlFor="select-bedrooms">Bedroom</label>
        <select defaultValue={+filterBedroom} className='select-bedrooms' onChange={(e) => {
          navigate(`/citydetails/${id}/${e.target.value}`);filterProperties(e.target.value,bathroom,price)
        }}>
          <option value={1}>Bedroom</option>
          {
            bedroomOptions.map(item=>{
              return <option value={item} key={item}>{item}</option>
            })
          }
        </select>
      </div>
      
      <div className='bathroom-container'>
        <label htmlFor="select-bathrooms">Bathroom</label>
        <select className='select-bathrooms' onChange={(e)=>{setBathroom(e.target.value);filterProperties(filterBedroom,e.target.value,price)}}>
          <option value={1}>Bathroom</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      
      <div className='max-price-container'>
        <label htmlFor='select-max-price'>Max Price</label>
        <select className='select-max-price' onChange={(e)=>{setPrice(e.target.value);filterProperties(filterBedroom,bathroom,e.target.value)}}>
          <option value={100000}>Max Price</option>
          {
            priceOptions.map(item=>{
              return <option value={item} key={item}>{item}</option>
            })
          }
        </select>
      </div>
      
      {/* <div className='home-type-container'>
        <label hmtlFor='select-home-type' onChange={typeFilter}>Home Type</label>
        <select className='select-home-type'>
          <option value="">Home Type</option>
          {
            
          }
          <option>Detached</option>
          <option>Semi-Detached</option>
          <option>Apartment</option>
        </select>
      </div> */}
      
    </div>
)
}

export default AccommodationFilter