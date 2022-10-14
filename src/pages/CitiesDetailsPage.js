import React from 'react'
import Banner from '../components/Banner'
import '../stylesheets/CitiesDetailsPage.css'
import AccommodationFilter from '../components/AccommodationFilter'
import AccommodationList from '../components/AccommodationList'
import Students from '../assets/students.png'

function CitiesDetailsPage() {

  const bannerHeader = 'Search Accommodation'
  const bannerText = 'Whatever you’re after, we can help you find the right student accommodation for you. '

  return (
    <div className='cities-details-container'>

        <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>
        <AccommodationFilter/>
        <AccommodationList/>

        <div className='students'>
          <div className='students-left'>
            <h2 className='students-header'>Being a student in Leeds</h2>
            <p className='students-paragraph'>Leeds is a lively and multicultural city with a large student population. It is quite a compact city, so it is easy to get around and has a community feel. Leeds is the perfect mix of city and town life and has something to offer to anyone who calls it home.</p>
            <br></br>
            <p className='students-paragraph'>Leeds is home to three universities, the University of Leeds, Leeds Trinity University and Leeds Beckett University</p>
          </div>
          <img src={Students} alt='Group of students'/>
        </div>

    </div>
  )
}

export default CitiesDetailsPage