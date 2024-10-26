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
    handleOpen(); 
    dispatch(setLocation(data.name));
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