import React from 'react'

function PropertyCard({property}) {

  return (
    <div className='card-container'>
        <div className='property-card-container'>
            <h2>{property.address.street}, {property.address.city}, {property.address.postcode}</h2>
        </div>
        <div className='stats'>
            <div className='bedroom-pty'>
                <p>Bedrooms</p>
                <p></p>
            </div>
            <div className='bathroom-pty'>
                <p>Bathrooms</p>
                <p></p>
            </div>
            <div className='property-pty'>
                <p>Property Type</p>
                <p></p>
            </div>
            <div className='price-pty'>
                <p>Price</p>
                <p></p>
            </div>
            <div className='furnished-pty'>
                <p>Furnished Type</p>
                <p></p>
            </div>
            <div className='availability-pty'>
                <p>Available From</p>
                <p></p>
            </div>
        </div>
        <div className='buttons'>
            <button className='shortlist-btn-pty'>Shortlist</button>
            <button className='booking-btn-pty'>Book Viewing</button>
        </div>
    </div>
  )
}

export default PropertyCard