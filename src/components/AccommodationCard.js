import React from 'react'
import '../stylesheets/AccommodationCard.css'

function AccommodationCard({item}) {
  return (
    <div>
        <p>{item._id}</p>
    </div>
  )
}

export default AccommodationCard