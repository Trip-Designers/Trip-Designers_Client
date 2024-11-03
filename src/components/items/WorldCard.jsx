import React from 'react';
import { useSelector } from 'react-redux';
// 아이콘
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
// 컴포넌트
import TravelInfo from './TravelInfo';
import LinkSiteBtn from './LinkSiteBtn';
import Button from './Button';
//데이터
import { travleInfoItems } from '../../mockData';
import { useGetDestinationByNameQuery } from '../../app/apiSlice';

const WorldCard = () => {
  const destination = useSelector((state) => state.travel.destination);
  const { data } = useGetDestinationByNameQuery(destination);

  const imageUrl = data?.data?.image ? `data:image/jpeg;base64,${data.data.image}` : "/img/noimg1.png";
  return (
    <div id='worldcard'>
      <div className='left'>
        <div className='left__top'>
          <h3>JEJU</h3>
          <h1>{data?.data?.destinationName}</h1>
          <div className='left__desc'>{data?.data?.description}</div>
        </div>
        <div className='left__mid'>
          {travleInfoItems.map((data) => (
            <TravelInfo key={data.id} data={data} />
          ))}
        </div>
        <Button width={'200px'} url={`/planning`} text={'일정만들기'} />
      </div>
      <div className='right'>
        <div className='right__top'>
          <img src={data?.data?.image ? imageUrl : "/img/noimg1.png"} alt="장소" />
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