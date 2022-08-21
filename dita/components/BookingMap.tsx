import React, { useState } from 'react'
import Map from 'react-map-gl';
// npm install --save react-map-gl mapbox-gl

function BookingMap() {

  return (
  
    <Map 
    style={{width: 600, height: 400}}
    mapStyle='mapbox://styles/kvl01/cl72qi24u000v14p9ytjssi4e'
    mapboxAccessToken={process.env.mapbox_key}

    initialViewState={{
      longitude: 114,
      latitude: 22.3,
      zoom: 8
    }}

    />
    
  )
}

export default BookingMap