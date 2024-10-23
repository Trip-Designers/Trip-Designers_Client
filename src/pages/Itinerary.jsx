import React, { useState } from 'react';
import Main from '../components/layout/Main';
import { Map } from 'react-kakao-maps-sdk';

const Itinerary = () => {
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
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={mapStyles}
        level={9}
      >
      </Map>
    </Main>
  )
}

export default Itinerary