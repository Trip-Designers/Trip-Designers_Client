import React from 'react'

const TimeSetting = () => {
  return (
    <div id='timeSetting'>
      <div className='timeSetting__inner'>
        <div>
          <span>일자</span>
          <span>10/15 화</span>
        </div>
        <div>
          <span>시작시간</span>
          <input type="time" id="appt" name="appt" min="10:00" max="22:00" required />
        </div>
        <div>
          <span>종료시간</span>
          <input type="time" id="appt" name="appt" min="10:00" max="22:00" required />
        </div>
      </div>
    </div>
  )
}

export default TimeSetting