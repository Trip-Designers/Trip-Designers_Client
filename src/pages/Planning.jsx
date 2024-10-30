import React, { useState } from 'react';
// 라이브러리
import { DateCalendar } from '../components/DateCalendar';
import { Map } from 'react-kakao-maps-sdk'; 
// 컴포넌트
import Main from '../components/layout/Main';
import Modal from '@mui/material/Modal';

const Planning = () => {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(!open);
  }
  const mapStyles = {
    width: 'calc(100vw - 498px)',
    height: '100vh',
    zIndex: 10
  }
  
  return (
    <Main>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="date-range-modal"
        aria-describedby="select-date-range"
      >
        <div className='dateCalendar'>
          <DateCalendar onClick={closeModal} />
        </div>
      </Modal>
      <Map
        center={{ lat: 37.569068, lng: 126.975562 }}
        style={mapStyles}
        level={10}
      >
      </Map>
    </Main>
  )
}

export default Planning;
