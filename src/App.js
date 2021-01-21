import React, { useEffect, useRef } from 'react';
import Mapbox from 'mapbox-gl';

function App() {
  let map;
  const mapElement = useRef(null);
  Mapbox.accessToken = process.env.MAPBOX_API_KEY;

  useEffect(() => {
    map = new Mapbox.Map({
      container: mapElement.current,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }, []);
  
  return (
    <>
      <h1>Hallo verden!</h1>
      <div style={{height: '500px'}} ref={mapElement}></div>
    </>
  )
};

export default App;