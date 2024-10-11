import React from 'react'

const TimeSetting = ({ data }) => {
  return (
    <div id='timeSetting'>
      <div className='timeSetting__inner'>
        <div>
          <span>일자</span>
          <span>{data.date}</span>
        </div>
        <div>
          <span>시작시간</span>
          <input type="time" id="appt" name="appt" value={data.startTime} required />
        </div>
        <div>
          <span>종료시간</span>
          <input type="time" id="appt" name="appt" value={data.endTime} required />
        </div>
      </div>
    </div>
  )
}

export default TimeSetting