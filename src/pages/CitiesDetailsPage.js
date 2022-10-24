import React, {useEffect, useState} from 'react'
import Banner from '../components/Banner'
import '../stylesheets/CitiesDetailsPage.css'
import AccommodationFilter from '../components/AccommodationFilter'
import Students from '../assets/students.png'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import AccommodationCard from '../components/AccommodationCard'
// import AccommodationList from '../components/AccommodationList'

function CitiesDetailsPage({baseUrl}) {

  const bannerHeader = 'Search Accommodation'
  const bannerText = 'Whatever you’re after, we can help you find the right student accommodation for you. '

  const {id} = useParams()
  const [cityDetails, setCityDetails] = useState({})
  const [cityProperties, setCityProperties] = useState([])
  const [bedroom, setBedroom] = useState([])
  const [bathroom, setBathroom] = useState([])
  const [price, setPrice] = useState([10000])
  // const [type, setType] = useState([])

  useEffect(() => {
    axios.get(`${baseUrl}cities/${id}`)
    .then(res => {setCityDetails(res.data.data[0])})
    .catch(err=>console.log(err))
  }, [])

  useEffect(() => {
    axios.get(`${baseUrl}properties/city/${id}`)
    .then(res=>{setCityProperties(res.data.response)})
    .catch(err=>console.log(err))
  }, [])

  const bedroomFilter=(e)=>{
    setBedroom(e.target.value)
  }

  const bathroomFilter=(e)=>{
    setBathroom(e.target.value)
  }

  const priceFilter=(e)=>{
    setPrice(e.target.value)
  }

  // const typeFilter=(e)=>{
  //   setType(e.target.value)
  // }

  return (
    <div className='cities-details-container'>

        <Banner bannerHeader={bannerHeader} bannerText={bannerText}/>

        <AccommodationFilter bedroomFilter={bedroomFilter} bathroomFilter={bathroomFilter} priceFilter={priceFilter}/>

        <div className='acc-container'>
          <h1>{cityProperties.length} homes in {cityDetails.name}</h1>
          <div className='card-container'>
          {
              cityProperties.filter(item=>item.bedroom_count >= bedroom && item.bathroom_count >= bathroom && item.rent <= price).map((item)=>{
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