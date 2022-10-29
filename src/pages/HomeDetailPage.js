import React, {useEffect, useState} from 'react'
import '../stylesheets/HomeDetailPage.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'


function HomeDetailPage({baseUrl}) {

  const [property, setProperty] = useState({})
  const [cityID, setCityID] = useState()
  const {propertyID} = useParams()
  const [propertyImages, setPropertyImages] = useState([])
//   const [picIndex, setPicIndex] = useState(0)

  useEffect(()=>{
    axios.get(`${baseUrl}properties/${propertyID}`)
    .then(res=>{
      setProperty(res.data)
      setCityID(res.data.city_id._id)
      setPropertyImages(res.data.images)
    })
    .catch(err=>console.log(err))
  }, [])

//   const sliderHandler=(i)=>{
//     setPicIndex(i)
//   }

  return(
    <div className='propertyContainer'>
      <a href={`/citydetails/${cityID}`} className='link'>Back to Search</a>

      <div className='slider'>
        {
            propertyImages.map(item=>{
                return <img src={item} alt='Property Pic'/>
            })
        }
      </div>
      <div className='property-card'>
        <PropertyCard property={property}/>
      </div>
      <div className='description'>Description</div>
      <div className='bedroomPrices'>Bedroom Prices</div>
      <div className='keyFeatures'>Key Features</div>
    </div>

  )


}

export default HomeDetailPage