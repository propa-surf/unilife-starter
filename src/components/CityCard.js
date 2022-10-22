import React from 'react'
import '../stylesheets/CityCard.css'

function CityCard({item, index}) {

  return (
      <a href={`/citydetails/${item?._id}`} className={index===8 ? 'card last-card' : 'card'} style={{backgroundImage:`url('${item.image_url}')`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="card-overlay"></div>
        <h2 className='city-name'>{item.name}</h2>
        <p className='number-properties'>{item.property_count} properties</p>
      </a>
  )
}

export default CityCard