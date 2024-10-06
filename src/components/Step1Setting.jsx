import React from 'react'
import DateDetailSetting from './items/DateDetailSetting'

const Step1Setting = ({ onNext }) => {
  return (
    <div id='step1setting'>
      <p>여행 기간과 일정 시간을 시차를 고려해 현지시간으로 설정하세요.<br />기본 일정 시간은 <strong>오전 10시부터 오후 10시까지 총 12시간</strong>입니다.</p>
      <DateDetailSetting onNext={onNext} />
    </div>
  )
}

export default Step1Setting