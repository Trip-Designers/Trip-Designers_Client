import React from 'react'
import CreateSchedule from './CreateSchedule'
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import LinkSiteBtn from './LinkSiteBtn';

import { FaPassport } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import TravelInfo from './TravelInfo';
import { Link } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    icon: <IoAirplaneSharp />,
    travel_detail: '항공',
    travel_type: '직항',
    misc_info: '약 8시간'
  },
  {
    id: 2,
    icon: <FaPassport />,
    travel_detail: '비자',
    travel_type: '단기',
    misc_info: '90일'
  },
  {
    id: 3,
    icon: <MdElectricalServices />,
    travel_detail: '전압',
    travel_type: '콘센트',
    misc_info: '120V'
  },
  {
    id: 4,
    icon: <FaRegClock />,
    travel_detail: '시차',
    travel_type: '한국대비',
    misc_info: '-19시간'
  },
]

const WorldCard = ({ data }) => {
  return (
    <div id='worldcard'>
      <div className='left'>
        <div className='left__top'>
          <div>
            <h3>JEJU</h3>
            <h1>{data.title}</h1>
            <div className='left__top__desc'>{data.desc}가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나</div>
          </div>
          <div className='worldcard__left__mid'>
            {mockData.map((data) => (
              <TravelInfo key={data.id} data={data} />
            ))}
          </div>
        </div>
        <Link to={'/planning/제주'}>
            <CreateSchedule data={data} />
        </Link>
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