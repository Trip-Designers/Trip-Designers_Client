import React, { useEffect, useState } from 'react'
// 아이콘
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// 컴포넌트
import LinkSiteBtn from './items/LinkSiteBtn'
import TimeSetting from './items/TimeSetting';
// utils
import { getTimeDateArray } from '../utils/formatDate';
import { calculateTotalHours } from '../utils/formatTime';

const Step1DateSelection = ({ onNext }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  const [mockData, setMockData] = useState({
    id: 1,
    location: '제주',
    startDate: "2024-10-08",
    endDate: "2024-10-11",
  });

  // getTimeDateArray를 사용하여 timeDateArray 생성
  const [timeDateArray, setTimeDateArray] = useState(getTimeDateArray(mockData.startDate, mockData.endDate));
  const [totalTime, setTotalTime] = useState(0);

  const handleDateChange = (field, value) => {
    setMockData((prevData) => ({
      ...prevData,
      [field]: value, // 'startDate' 또는 'endDate' 업데이트
    }));
    setTimeDateArray(getTimeDateArray(mockData.startDate, mockData.endDate));
  };

  useEffect(() => {
    setTotalTime(calculateTotalHours(timeDateArray)); // Recalculate when timeDateArray changes
  }, [timeDateArray]);

  // Handle time change in TimeSetting
  const handleTimeChange = (index, field, value) => {
    const updatedArray = [...timeDateArray];
    updatedArray[index][field] = value;
    setTimeDateArray(updatedArray); // Update the array with new time
  };

  return (
    <div id='step1'>
      <div className='step__top'>
        <h1>{mockData.location}</h1>
        <div className='step__info'>
          <input type="date" defaultValue={mockData.startDate} onChange={(e) => handleDateChange('startDate', e.target.value)} /> - <input type="date" defaultValue={mockData.endDate} onChange={(e) => handleDateChange('endDate', e.target.value)} /> 
          <div >
            <LinkSiteBtn icon={<IoAirplaneSharp size={20} className='icon' />} site={'항공권'} url='https://www.skyscanner.co.kr/' css='btn'/>
            <LinkSiteBtn icon={<FaBed size={20} />} site={'숙소'} url='https://kr.trip.com/?locale=ko-KR&curr=KRW' css='btn' /> 
          </div>
        </div>
      </div>
      <div className='step__bottom'>
        <div onClick={handleOpen} className='step__bottom__desc'>
          <span>여행시간 상세설정</span>
          <span>&nbsp;총 {totalTime}시간 00분</span>
          <MdOutlineKeyboardArrowUp size={22} className={open ? '' : 'open'} />
        </div>
        {open ? (
          <>
            <p className='dateManual'>여행 기간과 일정 시간을 시차를 고려해 현지시간으로 설정하세요.<br />기본 일정 시간은 <strong>오전 10시부터 오후 10시까지 총 12시간</strong>입니다.</p>
            <div className='time__container'>
              {timeDateArray.map((data, i) => (
                <TimeSetting onNext={onNext} key={i} data={data} onTimeChange={(field, value) => handleTimeChange(i, field, value)} />
              ))}
            </div>
            <button onClick={onNext}>시간 설정 완료</button>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default Step1DateSelection