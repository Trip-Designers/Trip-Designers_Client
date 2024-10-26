import React, { useContext }  from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../pages/Home';
// 리덕스
import { setLocation } from '../../app/travleSlice';
// 아이콘
import { MdLocationOn } from "react-icons/md";

const WorldItem = ({ data, index }) => {
  const { handleOpen } = useContext(ModalContext);

  const dispatch = useDispatch();

  const handleClick = () => {
    setTimeout(() => {
      handleOpen(data.name); // 상태 업데이트를 비동기로 처리
      dispatch(setLocation(data.name));
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