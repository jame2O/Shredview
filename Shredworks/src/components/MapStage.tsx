import { useState, useEffect, useRef } from 'react';
import mapboxgl, { GeoJSONSource } from 'mapbox-gl';
import { SearchBox } from "@mapbox/search-js-react";
import osmtogeojson from 'osmtogeojson';
mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXMybyIsImEiOiJjbHhvbnJlMWQwZXByMnNxcnA4dGw3bWxyIn0.5M3i7YKGorD0Dm2mRk-9UQ';


function MapStage() {

  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-4.2372);
  const [lat, setLat] = useState(51.924);
  const [zoom, setZoom] = useState(10);
  
  const buildQuery = async () => {
    console.log(lng);
    // First build the bbox from local coords on map view
    let mapBbox = `(${lat-0.25},${lng-0.25},${lat+0.25},${lng+0.25})`
    // Now fetch the data from Overpass
    var query = await fetch(
      "https://overpass.kumi.systems/api/interpreter",
      {
        method: "POST",
        body: "data="+ encodeURIComponent(`
          [out:json]
          [timeout:90]
          ;
          (
            nwr["name"]
            ["route"="mtb"]
            ${mapBbox};
            nwr["name"]
            ["mtb:scale"]
            ${mapBbox};
          );
          out geom;
        `)
      },
    ).then(
      (data)=>data.json()
    );
    return (osmtogeojson(query)); 
  };


  useEffect(() => {
    // Initialize map
    if (map.current!) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/james2o/clxpundij003701pad4n1hevo',
      center: [lng, lat],
      zoom: zoom
    });
    // Add controls and layers to the map
    map.current!.on('load', () => {
      map.current?.addControl(new mapboxgl.FullscreenControl());
      map.current?.addControl(new mapboxgl.GeolocateControl());
      map.current?.addControl(new mapboxgl.NavigationControl());
      map.current?.addControl(new mapboxgl.ScaleControl());
      //Add empty trail source and layer
      map.current!.addSource('local-trail-data', {
        type: 'geojson',
        data: ""
        });
      map.current!.addLayer({
        id: 'local-trail-lines',
        type: 'line',
        source: 'local-trail-data',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
            
        },
        paint: {
          'line-color': '#1B1B1B',
          'line-width': 5          
          }
        });
      map.current!.addLayer({
        id: 'local-trail-lines-symbols',
        type: 'symbol',
        source: 'local-trail-data',
        layout: {
          "symbol-placement": 'line',
          'text-font': ['Manrope Medium'],
          'text-field': "{name}",
          "text-size": 12
        }
      });
    });
    
    // Update position and zoom on move
    map.current!.on('move', () => {
      setLng(map.current!.getCenter().lng);
      setLat(map.current!.getCenter().lat);
      setZoom(map.current!.getZoom());
      
    });
    map.current!.on('moveend', async () => {
      const localTrailData: any = await buildQuery();
      console.log(localTrailData);
      (map.current?.getSource('local-trail-data') as GeoJSONSource).setData(localTrailData);
      map.current!.triggerRepaint();
    });
});
  
  
  return (
    <div>
      <SearchBox 
                accessToken={mapboxgl.accessToken}
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
      {`${zoom},${lng},${lat}`}
    </div>
      
  );
}
export default MapStage;