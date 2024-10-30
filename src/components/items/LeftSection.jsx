import React, { useEffect, useState, useRef } from 'react'
import SelectWorld from './SelectWorld';

const LeftSection = () => {
  const [isClick, setIsClick] = useState(false);
  const searchFieldRef = useRef(null); // 검색 필드를 참조할 ref

  useEffect(() => {
    const handleWindowClick = (e) => {
      // 검색 필드 외부 클릭 시만 isClick을 false로 변경
      if (searchFieldRef.current && !searchFieldRef.current.contains(e.target)) {
        setIsClick(false);
      }
    };

    if (isClick) {
      window.addEventListener('click', handleWindowClick);
    }

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [isClick]);
  
  return (
    <section className='home__left'>
      <h1>여행 테마와 일정 선택으로,<br />AI가 완벽한 여행을 준비합니다!</h1>
      <p>여행 계획 세우기 귀찮을 땐 <span>Trip Designers</span>를 통해 몇 분 만에 스케줄링 해보세요.</p>
      {isClick ? (
        <SelectWorld ref={searchFieldRef} id="search-field" />
      ) : (
        <button onClick={(e) => {
          e.stopPropagation(); // 버튼 클릭 시 이벤트 전파 방지
          setIsClick(true);
        }}>
          여행 시작하기
        </button>
      )}
    </section>
  )
}

export default LeftSection