import { useState } from 'react';
import '../index.css';

function MapStage() {
  var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
  mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMybyIsImEiOiJjbHhvbnJlMWQwZXByMnNxcnA4dGw3bWxyIn0.5M3i7YKGorD0Dm2mRk-9UQ';
  var map = new mapboxgl.Map({
    container: 'mapStage',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
    return (
        <div id="mapStage" />
    );
}
export default MapStage;