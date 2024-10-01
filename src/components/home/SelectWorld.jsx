import React, { forwardRef } from 'react';
import WorldItem from '../items/WorldItem';
import { IoIosSearch } from "react-icons/io";

const mockData = [
  {
    id: 1,
    title: '제주',
    desc: '대한민국',
  },
  {
    id: 2,
    title: '하와이',
    desc: '미국',
  },
  {
    id: 3,
    title: '괌',
    desc: '미국',
  },
  {
    id: 4,
    title: '괌',
    desc: '미국',
  },
  {
    id: 5,
    title: '괌',
    desc: '미국',
  },
  {
    id: 6,
    title: '괌',
    desc: '미국',
  },
]

// forwardRef를 사용하여 ref 전달 가능하도록 설정
const SelectWorld = forwardRef((props, ref) => {
  return (
    <div ref={ref} id={props.id} className='selectworld'>
      <div className='selectworld__input'>
        <IoIosSearch />
        <input type="text" placeholder='어디로 여행을 떠나시나요?'/>
      </div>
      <div className='selectworld__search'>목록에서 찾아보기</div>
      <div className='selectworld__items'>
        <ul>
          {mockData.map((data) => (
            <WorldItem data={data} key={data.id} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default SelectWorld;
