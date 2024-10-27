import React from 'react';
import Main from '../components/layout/Main';
import { Map } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';

const Itinerary = () => {
  const data = useSelector((state) => state.travel.data);
  const schedule = data.data.schedule || [];

  const day = useSelector((state) => state.day.day);
  const markers = schedule[day-1]?.activities || [];
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
        level={5}
      >
      </Map>
    </Main>
  )
}

export default Itinerary