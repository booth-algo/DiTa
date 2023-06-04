import React, { useState } from 'react'
import Map, { NavigationControl, Marker, Popup, FullscreenControl, FullscreenControlProps, GeolocateControl } from 'react-map-gl';
// npm install --save react-map-gl mapbox-gl

function BookingMap() {
  const [lng, setLng] = useState(113.9);
  const [lat, setLat] = useState(22.3);

  return (
    <Map 
    style={{
      width: "400px", 
      height: "550px",
      
    }}
    mapStyle='mapbox://styles/kvl01/cl72qi24u000v14p9ytjssi4e'
    mapboxAccessToken={process.env.mapbox_key}

    initialViewState={{
      longitude: lng,
      latitude: lat,
      zoom: 8.5
    }}
    >
      <Marker longitude={lng} latitude={lat} 
        offsetTop={-20} offsetLeft={-7}
        anchor="center"
      />
      <NavigationControl position="bottom-right"/>
      <FullscreenControl />
      <GeolocateControl />

    </Map>
    
  )
}

export default BookingMap