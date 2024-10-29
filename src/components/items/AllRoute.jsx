import React from 'react'
import Route from './Route'

const AllRoute = ({ schedule, location }) => {
  return (
    <div id='step1'>
      <div className='step__top top alltop'>
        <h1>{location}</h1>
      </div>
      <div className='allroute'>
        {schedule.map((daySchedule, dayIndex) => (
          <div key={dayIndex}>
            <h2 style={{marginBottom: "10px"}}>{dayIndex + 1}일차</h2>
            <div>
              {daySchedule.activities.map((activity, activityIndex) => (
                <Route key={activityIndex} data={activity} index={activityIndex + 1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllRoute