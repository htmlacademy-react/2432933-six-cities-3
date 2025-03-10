import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'leaflet';
import {useEffect, useState, useRef, MutableRefObject} from 'react';
import { Location } from '../../types/place-type/place-type';

type MpRefProps = MutableRefObject<HTMLElement | null>

const useMap = (mapRef :MpRefProps, location :Location) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;

    }
  }, [mapRef, location]);


  return map;
};


export default useMap;
