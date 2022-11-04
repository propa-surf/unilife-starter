import React from 'react'
import '../stylesheets/PropertyCard.css'

function PropertyCard({property, openModal}) {

  return (
    <div className='property-card-container'>
        <div className='property-container-single'>
            <h2>{property?.address?.street}, {property?.address?.city}, {property?.address?.postcode}</h2>
        </div>
        <div className='stats'>
            <div className='bedroom-pty'>
                <p>Bedrooms</p>
                <p>{property?.bedroom_count}</p>
            </div>
            <div className='bathroom-pty'>
                <p>Bathrooms</p>
                <p>{property?.bathroom_count}</p>
            </div>
            <div className='property-pty'>
                <p>Property Type</p>
                <p>{property?.property_type}</p>
            </div>
            <div className='price-pty'>
                <p>Price</p>
                <p>{property?.rent}</p>
            </div>
            <div className='furnished-pty'>
                <p>Furnished Type</p>
                <p>{property?.furnished}</p>
            </div>
            <div className='availability-pty'>
                <p>Available From</p>
                <p>{property?.availability}</p>
            </div>
        </div>
        <div className='buttons'>
            <button className='shortlist-btn-pty'>Shortlist</button>
            <button className='booking-btn-pty' onClick={openModal}>Book Viewing</button>
        </div>
    </div>
  )
}

export default PropertyCard