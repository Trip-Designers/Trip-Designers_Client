import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
//컴포넌트
import WorldItem from '../items/WorldItem';
//아이콘
import { IoIosSearch } from "react-icons/io";
//데이터
import { locationData } from '../../mockData';


// forwardRef를 사용하여 ref 전달 가능하도록 설정
const SelectWorld = forwardRef((props, ref) => {
  const [searchTerm, setSearchTerm] = useState(''); // 입력값을 저장하는 상태 추가

  // 입력값에 따라 데이터를 필터링
  const filteredData = locationData.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase()) || // 제목에서 검색
    data.desc.toLowerCase().includes(searchTerm.toLowerCase())    // 설명에서 검색
  );
  return (
    <div ref={ref} id={props.id} className='selectworld'>
      <div className='selectworld__input'>
        <IoIosSearch />
        <input type="text" placeholder='어디로 여행을 떠나시나요?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      <div className='selectworld__search'>
        <Link to={'/'}>
          목록에서 찾아보기
        </Link>
      </div>
      <div className='selectworld__items'>
        <ul>
          {filteredData.map((data) => (
            <WorldItem data={data} key={data.id} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default SelectWorld;
