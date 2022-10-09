import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../stylesheets/CityCard.css'

function CityCard({baseUrl}) {

  const [city, setCity] = useState([])

  useEffect(()=>{
    axios.get(`${baseUrl}cities?limit=9`)
    .then(res =>{setCity(res.data.response)})
    .catch(err=>console.log(err))
  },[])

  const skyline={
    backgroundImage: `url("${city[0]?.image_url}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }

  return (
    <div className='card-container'>
      {
        city.map((item)=>{
          return <div className='card-card' style={skyline}>
            <div className="card-overlay"></div>
            <h2 className='city-name'>{item.name}</h2>
            <p className='number-properties'>{item.property_count} properties</p>
          </div>
        })
      }
    </div>
  )
}

export default CityCard