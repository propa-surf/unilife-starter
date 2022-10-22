import React, {useEffect, useState} from 'react'
import AccommodationCard from './AccommodationCard'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import '../stylesheets/AccommodationList.css'

function AccommodationList({baseUrl, cityDetails}) {

  const {id} = useParams()

  const [cityProperties, setCityProperties] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}properties/city/${id}`)
    .then(res=>{setCityProperties(res.data.response)})
    .catch(err=>console.log(err))
  }, [])


  return (
    <div className='acc-container'>
        <h1>{cityProperties.length} homes in {cityDetails.name}</h1>
        <div className='card-container'>
        {
            cityProperties.map((item)=>{
                return <AccommodationCard item={item} key={item._id}/>
            })
        }
        </div>
    </div>

  )
}

export default AccommodationList