import React from 'react'

const DateDetailSetting = ({ onNext }) => {
  return (
    <div id='dateDetailSetting'>
      <div className='dateDetailSetting__inner'>
        <div>
          <span>일자</span>
          <span>10/15 화</span>
        </div>
        <div>
          <span>시작시간</span>
          <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
        </div>
        <div>
          <span>종료시간</span>
          <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />
        </div>
      </div>
      <button onClick={onNext}>시간 설정 완료</button>
    </div>
  )
}

export default DateDetailSetting