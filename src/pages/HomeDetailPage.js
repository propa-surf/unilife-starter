import React, {useEffect, useState} from 'react'
import '../stylesheets/HomeDetailPage.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'


function HomeDetailPage({baseUrl}) {

  const [property, setProperty] = useState({})
  const [cityID, setCityID] = useState()
  const {propertyID} = useParams()

  useEffect(()=>{
    axios.get(`${baseUrl}properties/${propertyID}`)
    .then(res=>{
      setProperty(res.data)
      setCityID(res.data.city_id._id)
    })
    .catch(err=>console.log(err))
  }, [])

  return(
    <div className='propertyContainer'>
      <a href={`/citydetails/${cityID}`} className='link'>Back to Search</a>
      <div className='slider'>Slider</div>
      <div className='propertyCard'>Property Card</div>
      <div className='description'>Description</div>
      <div className='bedroomPrices'>Bedroom Prices</div>
      <div className='keyFeatures'>Key Features</div>
    </div>

  )


}

export default HomeDetailPage