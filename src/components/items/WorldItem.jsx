import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { useContext } from 'react';
import { ModalContext } from '../../pages/Home';

const WorldItem = ({ data, index }) => {
  const modal = useContext(ModalContext);

  const handleClick = () => {
    setTimeout(() => {
      modal.handleOpen(data); // 상태 업데이트를 비동기로 처리
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