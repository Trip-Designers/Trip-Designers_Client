import React, { useState } from 'react'
// 아이콘
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
// 컴포넌트
import LinkSiteBtn from './items/LinkSiteBtn'
import Step1Setting from './Step1Setting';

const Step1DateSelection = ({ onNext }) => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(!open);

  return (
    <div id='step1'>
      <div className='step__top'>
        <h1>제주</h1>
        <div className='step__info'>
          <input type="date" /> - <input type="date" /> 
          <div>
            <LinkSiteBtn icon={<IoAirplaneSharp size={20} className='icon' />} site={'항공권'} url='https://www.skyscanner.co.kr/' css='btn'/>
            <LinkSiteBtn icon={<FaBed size={20} />} site={'숙소'} url='https://kr.trip.com/?locale=ko-KR&curr=KRW' css='btn' /> 
          </div>
        </div>
      </div>
      <div className='step__bottom'>
        <div onClick={handleOpen} className='step__bottom__desc'>
          <span>여행시간 상세설정</span>
          <span>&nbsp;총 36시간 00분</span>
          <MdOutlineKeyboardArrowUp size={22} className={open ? '' : 'open'} />
        </div>
        {open ? (
          <Step1Setting onNext={onNext} />
        ) : null}
      </div>
    </div>
  )
}

export default Step1DateSelection