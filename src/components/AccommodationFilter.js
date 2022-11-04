import '../stylesheets/AccommodationFilter.css'

function AccommodationFilter({filterBedroom, bedroomFilter, bathroomFilter, priceFilter, typeFilter}) {

  const bedroomOptions = [1,2,3,4,5,6,7,8,9]
  const priceOptions = [1000,1500,2000,2500,3000]

  return(

    <div className='filter-container'>
      
      <div className='bedroom-container'>
        <label htmlFor="select-bedrooms">Bedroom</label>
        <select defaultValue={+filterBedroom} className='select-bedrooms' onChange={bedroomFilter}>
          <option value=''>Bedroom</option>
          {
            bedroomOptions.map(item=>{
              return <option value={item} key={item}>{item}</option>
            })
          }
        </select>
      </div>
      
      <div className='bathroom-container'>
        <label htmlFor="select-bathrooms">Bathroom</label>
        <select className='select-bathrooms' onChange={bathroomFilter}>
          <option value="">Bathroom</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      
      <div className='max-price-container'>
        <label htmlFor='select-max-price'>Max Price</label>
        <select className='select-max-price' onChange={priceFilter}>
          <option value={100000}>Max Price</option>
          {
            priceOptions.map(item=>{
              return <option value={item} key={item}>{item}</option>
            })
          }
        </select>
      </div>
      
      <div className='home-type-container'>
        <label hmtlFor='select-home-type' onChange={typeFilter}>Home Type</label>
        <select className='select-home-type'>
          <option value="">Home Type</option>
          {
            
          }
          <option>Detached</option>
          <option>Semi-Detached</option>
          <option>Apartment</option>
        </select>
      </div>
      
    </div>
)
}

export default AccommodationFilter