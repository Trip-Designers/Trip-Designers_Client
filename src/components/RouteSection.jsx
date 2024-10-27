import React from 'react'
import Route from './items/Route'

const RouteSection = ({ schedule, location, index }) => {
  return (
    <div id='step1'>
      <div className='step__top top'>
        <h1>{location}</h1>
        <div className='step__info'>
          <span style={{fontSize: '1.1rem', fontWeight: 'bold'}}>{index}일차</span>
        </div>
      </div>
      <div>
        {schedule.activities.map((data, i) => (
          <Route key={i} data={data} index={i+1} />
        ))}
      </div>
    </div>
  )
}

export default RouteSection