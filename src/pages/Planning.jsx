import React, { useState } from 'react';
import Main from '../components/layout/Main';
import DateRange from '../components/items/DateRange';
import Modal from '@mui/material/Modal';
import { Map } from 'react-kakao-maps-sdk';

const Planning = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const mapStyles = {
    width: 'calc(100vw - 498px)',
    height: '100vh',
    marginLeft: '427px',
    zIndex: 10
  }
  return (
    <Main>
      <Modal
        open={open}
        aria-labelledby="date-range-modal"
        aria-describedby="select-date-range"
      >
        <div>
          <DateRange />
        </div>
      </Modal>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={mapStyles}
        level={9}
      >
      </Map>
    </Main>
  )
}

export default Planning