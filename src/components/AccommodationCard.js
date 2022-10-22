import React from 'react'
import '../stylesheets/AccommodationCard.css'
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";

function AccommodationCard({item}) {
  return (
    <div className='property-container'>
      <img src={item.images[0]} alt='Room Pic'/>
      <div className='price-container'>
        <div className='price'>
          <p className='price-large'>€{item.rent}</p>
          <p className='price-small'>including bills</p>
        </div>
        <div className='rooms'>
          <div className='bed'>
            <IoBedOutline className='bed-icon'/>
            <p>{item.bedroom_count}</p>
          </div>
          <div className='bath'>
            <MdOutlineBathtub className='bath-icon'/>
            <p>{item.bathroom_count}</p>
          </div>
        </div>
      </div>
      <div className='type-container'>
        <div className='upper-container'>
          <p className='type'>{item.property_type}</p>
          <p className='furnished'>{item.furnished}</p>
        </div>
        <p className='address'><IoLocationOutline/>{item.address.street}, {item.address.city}, {item.address.postcode}</p>
      </div>
      <div className='click-container'>
        <button className='shortlist-btn'><AiOutlineHeart/> Shortlist</button>
        <a href='/homedetails' className='view'><AiOutlineHome/> View Home</a>
      </div>
    </div>
  )
}

export default AccommodationCard