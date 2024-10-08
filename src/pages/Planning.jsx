import React, { useState } from 'react';
import Main from '../components/layout/Main';
import DateRange from '../components/items/DateRange';
import Modal from '@mui/material/Modal';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const Planning = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Main>
      <Modal
        open={open}
      >
        <div>
          <DateRange />
        </div>
      </Modal>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: 'calc(100% - 386px)', height: '100vh', marginLeft: '470px' }}
        level={8}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}></MapMarker>
      </Map>
    </Main>
  )
}

export default Planning