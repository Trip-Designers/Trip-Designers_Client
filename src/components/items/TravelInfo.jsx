import React from 'react'

const TravelInfo = ({data}) => {
  return (
    <div id='travelinfo'>
      <div className='travelinfo__top'>
        {data.icon}
        <p>{data.travel_detail}</p>
      </div>
      <div className='travelinfo__bottom'>
        <p>{data.travel_type}</p>
        <p>{data.misc_info}</p>
      </div>
    </div>
  )
}

export default TravelInfo