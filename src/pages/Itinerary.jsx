import React from 'react';
import Main from '../components/layout/Main';
import { Map, MapMarker, Polyline } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { calculateMidpoint } from './../utils/calculateMidpoint';

const Itinerary = () => {
  const data = useSelector((state) => state.travel.data);
  const schedule = data.data.schedule || [];

  const day = useSelector((state) => state.day.day);
  const markers = schedule[day-1]?.activities || [];

  const midpoint = calculateMidpoint(markers);

  const mapStyles = {
    width: 'calc(100vw - 498px)',
    height: '100vh',
    zIndex: 10
  }

  const linePath = markers.map((marker) => ({
    lat: marker.location.x,
    lng: marker.location.y,
  }));
  
  return (
    <Main>
      <Map
        center={{ lat: midpoint.lat, lng: midpoint.lng }}
        style={mapStyles}
        level={8}
      >
        {markers.map((marker, i) => (
          <MapMarker 
            key={i} 
            position={{ lat: marker.location.x, lng: marker.location.y }} 
            title={marker.name} />
        ))}

        <Polyline
          path={linePath.map((point) => ({lat: point.lat, lng: point.lng }))} 
          strokeWeight={5}
          strokeColor="#ff0044"
          strokeOpacity={0.7} 
          strokeStyle="solid"
        />
      </Map>
    </Main>
  )
}

export default Itinerary