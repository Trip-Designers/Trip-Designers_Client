import React from 'react';
import Main from '../components/layout/Main';
import { Map, MapMarker, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { calculateMidpoint } from './../utils/calculateMidpoint';

const Itinerary = () => {
  const data = useSelector((state) => state.travel.data);
  const schedule = data.data.schedule || [];
  const day = useSelector((state) => state.day.day);

  // Define colors for markers and paths based on days
  const colorArray = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"]; 
  const markers = day === 0 
    ? schedule.flatMap(daySchedule => daySchedule.activities) 
    : schedule[day - 1]?.activities || [];

  const midpoint = calculateMidpoint(markers);

  const mapStyles = {
    width: 'calc(100vw - 498px)',
    height: '100vh',
    zIndex: 10
  };

  const getLinePath = (activities) => activities.map(activity => ({
    lat: activity.location.x,
    lng: activity.location.y
  }));

  return (
    <Main>
      <Map
        center={{ lat: midpoint.lat, lng: midpoint.lng }}
        style={mapStyles}
        level={8}
      >
        {day === 0
          ? schedule.map((daySchedule, dayIndex) =>
              daySchedule.activities.map((activity, i) => (
                <CustomOverlayMap
                  key={`${dayIndex}-${i}`}
                  position={{ lat: activity.location.x, lng: activity.location.y }}
                >
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: colorArray[dayIndex % colorArray.length],
                    borderRadius: '50%',
                    border: '2px solid white',
                    boxShadow: '0px 0px 4px rgba(0,0,0,0.4)'
                  }} />
                </CustomOverlayMap>
              ))
            )
          : markers.map((marker, i) => (
            <CustomOverlayMap
              key={i}
              position={{ lat: marker.location.x, lng: marker.location.y }}
            >
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: colorArray[(day - 1) % colorArray.length],
                borderRadius: '50%',
                border: '2px solid white',
                boxShadow: '0px 0px 4px rgba(0,0,0,0.4)'
              }} />
            </CustomOverlayMap>
          ))}

        {day === 0 
          ? schedule.map((daySchedule, index) => (
              <Polyline
                key={index}
                path={getLinePath(daySchedule.activities)}
                strokeWeight={5}
                strokeColor={colorArray[index % colorArray.length]}
                strokeOpacity={0.7}
                strokeStyle="solid"
              />
            ))
          : (
            <Polyline
              path={getLinePath(markers)}
              strokeWeight={5}
              strokeColor={colorArray[(day - 1) % colorArray.length]}
              strokeOpacity={0.7}
              strokeStyle="solid"
            />
          )}
      </Map>
    </Main>
  );
};

export default Itinerary;
