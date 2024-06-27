import { useState, useEffect, useRef } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import { SearchBox } from "@mapbox/search-js-react";


mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMybyIsImEiOiJjbHhvbnJlMWQwZXByMnNxcnA4dGw3bWxyIn0.5M3i7YKGorD0Dm2mRk-9UQ';

function MapStage() {

  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-0.1274);
  const [lat, setLat] = useState(51.5067);
  const [zoom, setZoom] = useState(10);
  const [loc, setLoc] = useState("");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/james2o/clxpundij003701pad4n1hevo',
      center: [lng, lat],
      zoom: zoom
    });
    map.current.on('move', () => {
      setLat(map.current!.getCenter().lng)
      setLng(map.current!.getCenter().lat)
      setZoom(map.current!.getZoom())
    })
    map.current.on('render', () => {
      map.current!.resize();
    });

  });

  return (
    <div>
      <SearchBox 
                accessToken='pk.eyJ1IjoiamFtZXMybyIsImEiOiJjbHhvbm1mNjMwMm1iMmxxd3FsMDBhMWFkIn0.I1-CXqw81d4K9ne6YnJRuA'
                placeholder="Trail Location"
                map={map.current!}
                mapboxgl={mapboxgl}
                marker={true}
                value=""
                options={{
                    language: 'en',
                    country: 'GB'
                }}
      />
      <div ref={mapContainer} className="map-container" />
    </div>
      
  );
}
export default MapStage;