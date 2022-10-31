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
  const [allImages, setAllImages] = useState([])
  const [keyFeatures, setKeyFeatures] = useState([])
  const [bedroomPrice, setBedroomPrice] = useState({})

  useEffect(()=>{
    axios.get(`${baseUrl}properties/${propertyID}`)
    .then(res=>{
      setProperty(res.data)
      setCityID(res.data.city_id._id)
      setPropertyImages(res.data.images[0])
      setAllImages(res.data.images)
      setKeyFeatures(res.data.key_features)
      setBedroomPrice(res.data.bedroom_prices)
    })
    .catch(err=>console.log(err))
  }, [])

  const sliderHandler=(i)=>{
    let image = allImages[i]
    setPropertyImages(image)
  }

  return(
    <div className='propertyContainer'>
      <a href={`/citydetails/${cityID}`} className='link'>Back to Search</a>

      <div className='slider'>
        <div className='big'>
            <img src={propertyImages} alt='Property Pic'/>
        </div>
        <div className='small'>
            {
                allImages.map((item, index)=>{
                    return <img src={item} key={index} onClick={item => sliderHandler(index)} alt='Property Pic'/>
                })
            }
        </div>
      </div>
      <div className='property-card'>
        <PropertyCard property={property}/>
      </div>
      <div className='description'>
        <h2 className='description-header'>Description</h2>
        <p className='description-text'>{property?.property_description}</p>
      </div>
      <div className='bedroom-prices'>
        <h2 className='bedroom-prices-header'>Bedroom Prices</h2>
      </div>
      <div className='key-features'>
        <h2 className='key-features-header'>Key Features</h2>
        <ul className='key-features-points'>
            {
                keyFeatures.map((item, index)=>{
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
      </div>
    </div>

  )


}

export default HomeDetailPage