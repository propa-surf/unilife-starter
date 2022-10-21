import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import '../stylesheets/CitiesDetailsPage.css'
import AccommodationFilter from '../components/AccommodationFilter'
import Students from '../assets/students.png'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import AccommodationList from '../components/AccommodationList'

function CitiesDetailsPage({baseUrl}) {

  const bannerHeader = 'Search Accommodation'
  const bannerText = 'Whatever you’re after, we can help you find the right student accommodation for you. '

  const {id} = useParams()
  const [cityDetails, setCityDetails] = useState({})

  useEffect(() => {
    axios.get(`${baseUrl}cities/${id}`)
    .then(res => {setCityDetails(res.data.data[0])})
    .catch(err=>console.log(err))
  }, [])

  return (
    <div className='cities-details-container'>

        <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>

        <AccommodationFilter/>

        <AccommodationList baseUrl={baseUrl}/>

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