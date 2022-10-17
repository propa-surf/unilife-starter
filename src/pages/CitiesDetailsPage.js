import React from 'react'
import Banner from '../components/Banner'
import '../stylesheets/CitiesDetailsPage.css'
import AccommodationFilter from '../components/AccommodationFilter'
import AccommodationList from '../components/AccommodationList'
import Students from '../assets/students.png'

function CitiesDetailsPage({baseUrl}) {

  const bannerHeader = 'Search Accommodation'
  const bannerText = 'Whatever you’re after, we can help you find the right student accommodation for you. '

  return (
    <div className='cities-details-container'>

        <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>

        <AccommodationFilter baseUrl={baseUrl}/>

        <AccommodationList/>

        <div className='students'>
          <div className='students-left'>
            <h2 className='students-header'>Being a student in CITY API</h2>
            <p className='students-paragraph'>STUDENT LIFE CITY API</p>
            <br></br>
            <p className='students-paragraph'>UNIVERSITIES CITY API</p>
          </div>
          <img src={Students} alt='Group of students'/>
        </div>

    </div>
  )
}

export default CitiesDetailsPage