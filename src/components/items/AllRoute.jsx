import React from 'react'
import Route from './Route'
import { useDispatch } from 'react-redux'
import { setPosition } from '../../app/positionSlice'

const AllRoute = ({ schedule, location }) => {
  const dispatch = useDispatch();

  const handlePosition = (name, position) => {
    dispatch(setPosition({ location: name, position: position}))
  }

  return (
    <div id='step1'>
      <div className='step__top alltop'>
        <h1>{location}</h1>
      </div>
      <div className='allroute'>
        {schedule.map((daySchedule, dayIndex) => (
          <div key={dayIndex}>
            <h2 style={{marginBottom: "10px"}}>{dayIndex + 1}일차</h2>
            <div>
              {daySchedule.activities.map((activity, activityIndex) => (
                <Route key={activityIndex} data={activity} index={activityIndex + 1} onClick={() => handlePosition(activity.name, [activity.location.x, activity.location.y])} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllRoute