import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import '../stylesheets/CitiesDetailsPage.css'
import AccommodationFilter from '../components/AccommodationFilter'
import Students from '../assets/students.png'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import AccommodationCard from '../components/AccommodationCard'

function CitiesDetailsPage({baseUrl}) {

  const bannerHeader = 'Search Accommodation'
  const bannerText = 'Whatever you’re after, we can help you find the right student accommodation for you. '

  const {id, filterBedroom} = useParams()
  const [cityDetails, setCityDetails] = useState({})
  const [cityProperties, setCityProperties] = useState([])
  const [allProperties, setAllProperties] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}cities/${id}`)
    .then(res => 
      {
        setCityDetails(res.data.data[0])
      })
    .catch(err=>console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`${baseUrl}properties/city/${id}`)
    .then(res=>
      {
        setCityProperties(res.data.response)
        setAllProperties(res.data.response)
      })
    .catch(err=>console.log(err))
   }, [])

  const filterProperties=(bathroom, price)=>{
    const query={
      city_id:id,
      bedroom_count:filterBedroom,
      bathroom_count:bathroom,
      rent:price
    }
    axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
    .then(res=>{
      setCityProperties(res.data.response)
    })
    .catch(err=>console.log(err))
 }

  return (
    <div className='cities-details-container'>

        <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>

        <AccommodationFilter filterBedroom={filterBedroom} id={id} filterProperties={filterProperties}/>

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

        <div className='students'>
          <div className='students-left'>
            <h2 className='students-header'>{cityDetails.name}</h2>
            <p className='students-paragraph'>{cityDetails.student_life}</p>
            <br></br>
            <p className='students-paragraph'>{cityDetails.universities}</p>
          </div>
          <img src={Students} alt='Group of students'/>
        </div>

    </div>
  )
}

export default CitiesDetailsPage