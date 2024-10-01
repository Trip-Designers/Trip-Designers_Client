import React, { useEffect, useState, useRef } from 'react'

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
      <h1>기존에 경험하지 못한<br />새로운 여행 플래너</h1>
      <p>고민만 하던 여행 계획을 <span>Trip Designers</span>를 통해 몇 분 만에 스케줄링 해보세요.</p>
      {isClick ? (
        <div ref={searchFieldRef} id="search-field">검색 필드</div>
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