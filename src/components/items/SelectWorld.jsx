import React, { forwardRef, useState } from 'react';
import { Link } from 'react-router-dom';
//컴포넌트
import WorldItem from '../items/WorldItem';
//아이콘
import { IoIosSearch } from "react-icons/io";
//데이터
import { useGetDestinationQuery } from '../../app/apiSlice';

// forwardRef를 사용하여 ref 전달 가능하도록 설정
const SelectWorld = forwardRef((props, ref) => {
  const [searchTerm, setSearchTerm] = useState(''); // 입력값을 저장하는 상태 추가
  const { data, isLoading } = useGetDestinationQuery();
  
  if (isLoading) {
    return <div>데이터 가져오는중...</div>;
  }

  // 입력값에 따라 데이터를 필터링
  const filteredData = data.data.filter((item) => {
    const name = item.name.toLowerCase();
    const nation = item.nation.toLowerCase();
    const searchValue = searchTerm.toLowerCase();

    return name.includes(searchValue) || nation.includes(searchValue);
  });

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
          {filteredData.map((data, i) => (
            <WorldItem data={data} key={i} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default SelectWorld;
