import React from 'react'
import '../stylesheets/PropertyCard.css'
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

function PropertyCard({property, openModal}) {

  return (
    <div className='property-card-container'>
        <div className='property-container-single'>
            <h2>{property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}</h2>
        </div>
        <div className='stats'>
            <div className='bedroom-pty'>
                <p>Bedrooms</p>
                <div className='bedroom-pty-content'>
                    <IoBedOutline className='bed-icon-pty'/>
                    <p>{property?.bedroom_count}</p>
                </div>
            </div>
            <div className='bathroom-pty'>
                <p>Bathrooms</p>
                <div className='bathroom-pty-content'>
                    <MdOutlineBathtub className='bath-icon-pty'/>
                    <p>{property?.bathroom_count}</p>
                </div>
            </div>
            <div className='property-pty'>
                <p>Property Type</p>
                <p className='property-pty-content'>{property?.property_type}</p>
            </div>
            <div className='price-pty'>
                <p>Price</p>
                <p className='price-pty-content'>€{property?.rent}</p>
            </div>
            <div className='furnished-pty'>
                <p>Furnished Type</p>
                <p className='furnished-pty-content'>{property?.furnished}</p>
            </div>
            <div className='availability-pty'>
                <p>Available From</p>
                <p className='availability-pty-content'>{property?.availability}</p>
            </div>
        </div>
        <div className='pty-buttons'>
            <button className='shortlist-btn-pty'><AiOutlineHeart className='pty-icon-heart'/> Shortlist</button>
            <button className='booking-btn-pty' onClick={openModal}>Book Viewing</button>
        </div>
    </div>
  )
}

export default PropertyCard