import React from 'react'

const TimeSetting = ({ data }) => {
  //onChange 작성
  return (
    <div id='timeSetting'>
      <div className='timeSetting__inner'>
        <div>
          <span>일자</span>
          <span>{data.date}</span>
        </div>
        <div>
          <span>시작시간</span>
          <input type="time" id="appt" name="appt" value={data.startTime} />
        </div>
        <div>
          <span>종료시간</span>
          <input type="time" id="appt" name="appt" value={data.endTime} />
        </div>
      </div>
    </div>
  )
}

export default TimeSetting