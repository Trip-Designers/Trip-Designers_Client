export const calculateMidpoint = (markers) => {
  if (markers.length === 0) return { lat: 33.5563, lng: 126.79581 }; // Default

  let x = 0;
  let y = 0;
  let z = 0;

  markers.forEach((marker) => {
    const lat = (marker.location.x * Math.PI) / 180;
    const lng = (marker.location.y * Math.PI) / 180; 

    x += Math.cos(lat) * Math.cos(lng);
    y += Math.cos(lat) * Math.sin(lng);
    z += Math.sin(lat);
  });

  const total = markers.length;

  x = x / total;
  y = y / total;
  z = z / total;

  const centralLng = Math.atan2(y, x);
  const centralSqrt = Math.sqrt(x * x + y * y);
  const centralLat = Math.atan2(z, centralSqrt);

  return {
    lat: (centralLat * 180) / Math.PI,
    lng: (centralLng * 180) / Math.PI,
  };
};