import React from 'react'
import Route from './items/Route'
import { useDispatch } from 'react-redux'
import { setPosition } from '../app/positionSlice'

const RouteSection = ({ schedule, location, index }) => {
  const dispatch = useDispatch();
  const handlePosition = (name, position) => {
    dispatch(setPosition({ location: name, position: position}))
  }
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
          <Route key={i} data={data} index={i+1} onClick={() => handlePosition(data.name, [data.location.x, data.location.y])} />
        ))}
      </div>
    </div>
  )
}

export default RouteSection