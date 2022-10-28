import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/FindHomes.css'

function FindHomes({baseUrl}) {

  const [city, setCity] = useState([])
  const [filterCity, setFilterCity] = useState([])
  const [bedroomFilter, setBedroomFilter] = useState()

  useEffect(()=>{
    axios.get(`${baseUrl}cities?limit=20`)
    .then(res =>{setCity(res.data.response)})
    .catch(err=>console.log(err))
  },[])

  const handlerFilterCity=(event)=>{
    setFilterCity(event.target.value)
  }

  const handlerBedroomFilter=(e)=>{
    setBedroomFilter(e.target.value)
  }

  return (
      <div className='find-homes-container'>
        <select className='select-city-homes' onChange={handlerFilterCity}>
          <option value="">Search by city</option>
          {
            city.map((item)=>{
              return <option key={item._id} value={item._id}>
                {item.name}
              </option>
            })
          }
        </select>
        <select className='select-bedrooms' onChange={handlerBedroomFilter}>
          <option value="">Bedrooms</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>
        <a href={filterCity=='' ? '' : `/citydetails/${filterCity}/${bedroomFilter}`} className="find">Find Homes</a>
      </div>
  )
}

export default FindHomes