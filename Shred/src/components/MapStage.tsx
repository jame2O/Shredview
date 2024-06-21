import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMybyIsImEiOiJjbHhvbnJlMWQwZXByMnNxcnA4dGw3bWxyIn0.5M3i7YKGorD0Dm2mRk-9UQ';

function MapStage() {

  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-0.1274);
  const [lat, setLat] = useState(51.5067);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    //update map on interaction
    map.current.on('move', () => {
    setLng(map.current!.getCenter().lng);
    setLat(map.current!.getCenter().lat);
    setZoom(map.current!.getZoom());
    console.log(`${lng} & ${lat}`)
  });
  });
  
  
  
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
      
  );
}
export default MapStage;