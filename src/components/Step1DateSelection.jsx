import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../app/travleSlice';
// utils
import { getTimeDateArray } from '../utils/formatDate';
import { calculateTotalHours } from '../utils/formatTime';
// 컴포넌트
import LinkSiteBtn from './items/LinkSiteBtn';
import TimeSetting from './items/TimeSetting';
import Button from '../components/items/Button';
// 아이콘
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Step1DateSelection = ({ onNext }) => {
  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  const [timeDateArray, setTimeDateArray] = useState(getTimeDateArray(travel.startDate, travel.endDate));
  const [totalTime, setTotalTime] = useState(0);

  const handleDateChange = (field, value) => {
    const isoDate = new Date(value).toLocaleDateString('sv-SE');
    if (field === 'startDate') {
      dispatch(setStartDate(isoDate));
    } else if (field === 'endDate') {
      dispatch(setEndDate(isoDate));
    }
    setTimeDateArray(getTimeDateArray(travel.startDate, travel.endDate));
  };

  useEffect(() => {
    setTimeDateArray(getTimeDateArray(travel.startDate, travel.endDate));
  }, [travel.startDate, travel.endDate]);

  useEffect(() => {
    setTotalTime(calculateTotalHours(timeDateArray));
  }, [timeDateArray]);

  const handleTimeChange = (index, field, value) => {
    const updatedArray = [...timeDateArray];
    updatedArray[index][field] = value;
    setTimeDateArray(updatedArray); 
  };

  return (
    <div id='step1'>
      <div className='step__top'>
        <h1>{travel.location}</h1>
        <div className='step__info'>
          <input 
            type="date" 
            value={travel.startDate || ''} 
            onChange={(e) => handleDateChange('startDate', e.target.value)} 
          /> 
          - 
          <input 
            type="date" 
            value={travel.endDate || ''} 
            onChange={(e) => handleDateChange('endDate', e.target.value)} 
          /> 
          <div >
            <LinkSiteBtn 
              icon={<IoAirplaneSharp size={20} className='icon' />} site={'항공권'} 
              url='https://www.skyscanner.co.kr/' 
              css='btn' 
            />
            <LinkSiteBtn 
              icon={<FaBed size={20} />} 
              site={'숙소'} 
              url='https://kr.trip.com/?locale=ko-KR&curr=KRW' 
              css='btn' /> 
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
          <div>
            <div>
              <p className='dateManual'>여행 기간과 일정 시간을 시차를 고려해 현지시간으로 설정하세요.<br />기본 일정 시간은 <strong>오전 10시부터 오후 10시까지 총 12시간</strong>입니다.</p>
              <div className='time__container'>
                {timeDateArray.map((data, i) => (
                  <TimeSetting onNext={onNext} key={i} data={data} onTimeChange={(field, value) => handleTimeChange(i, field, value)} />
                ))}
              </div>
            </div>
            <Button width='100%' text={'시간 설정 완료'} onClick={onNext} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Step1DateSelection;
