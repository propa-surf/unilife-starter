import React, {useEffect, useState} from 'react'
import AccommodationCard from './AccommodationCard'
import axios from 'axios'
import {useParams} from 'react-router-dom'

function AccommodationList({baseUrl}) {

  const {id} = useParams()

  const [cityProperties, setCityProperties] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}properties/city/${id}`)
    .then(res=>{setCityProperties(res.data.response)})
    .catch(err=>console.log(err))
  }, [])
  
  


  return (
    <div>
        {
            cityProperties.map((item)=>{
                return <AccommodationCard item={item}/>
            })
        }
    </div>

  )
}

export default AccommodationList