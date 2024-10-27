import React from 'react'
//아이콘
import { FaCarRear } from "react-icons/fa6";

const Route = ({ data, index }) => {
  return (
    <div id='route'>
      <div className='route__inner'>
        <div className='route__top'>
          <div className='route__order'>{index}</div>
          <div className='route__time'>18:27</div>
        </div>
        <div className='route__middle'>
          <div className='route__desc'>
            <div>{data.name}</div>
            <div className='desc'>{data.description}</div>
          </div>
          <div className='route__img'><img src="/img/성산일출봉.jpg" alt="장소" /></div>
        </div>
        {/* <div className='route__bottom'>
          <div style={{paddingTop: '4px', paddingLeft: '1px'}}>
            <FaCarRear color={'#b9b9b9'} size={15} />
          </div>
          <div className='route__time'>60분 &gt;</div>
        </div> */}
      </div>
    </div>
  )
}

export default Route