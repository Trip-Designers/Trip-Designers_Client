import React, { useContext }  from 'react'
// 아이콘
import { MdLocationOn } from "react-icons/md";
// 컴포넌트
import { ModalContext } from '../../pages/Home';

const WorldItem = ({ data, index }) => {
  const { handleOpen } = useContext(ModalContext);

  const handleClick = () => {
    setTimeout(() => {
      handleOpen(data.name); // 상태 업데이트를 비동기로 처리
    }, 0);
  };

  return (
    <li className='worldItem' key={index} onClick={handleClick}>
      <MdLocationOn size={20} color='grey'/>
      <div>
        <p>{data.name}</p>
        <p>{data.nation}</p>
      </div>
    </li>
  )
}

export default WorldItem