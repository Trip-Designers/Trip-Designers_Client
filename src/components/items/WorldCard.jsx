import React from 'react'
// 아이콘
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import TravelInfo from './TravelInfo';
// 컴포넌트
import LinkSiteBtn from './LinkSiteBtn';
import Button from './Button';
//데이터
import { travleInfoItems } from '../../mockData';

const WorldCard = ({ data }) => {
  return (
    <div id='worldcard'>
      <div className='left'>
        <div className='left__top'>
          <h3>JEJU</h3>
          <h1>{data.title}</h1>
          <div className='left__desc'>{data.desc}</div>
        </div>
        <div className='left__mid'>
          {travleInfoItems.map((data) => (
            <TravelInfo key={data.id} data={data} />
          ))}
        </div>
        <Button width={'200px'} url={`/planning`} text={'일정만들기'}/>
      </div>
      <div className='right'>
        <div className='right__top'>
          <img src="/img/성산일출봉.jpg" alt="여행지" />
        </div>
        <div className='right__bottom'>
          <LinkSiteBtn icon={<IoAirplaneSharp size={20} className='icon' />} site={'항공권'} url='https://www.skyscanner.co.kr/'/>
          <LinkSiteBtn icon={<FaBed size={20} />} site={'숙소'} url='https://kr.trip.com/?locale=ko-KR&curr=KRW' />
        </div>
      </div>
    </div>
  )
}

export default WorldCard