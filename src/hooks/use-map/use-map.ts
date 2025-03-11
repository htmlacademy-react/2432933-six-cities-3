import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TileLayer } from 'leaflet';
import {useEffect, useState, useRef, MutableRefObject} from 'react';
import { Location } from '../../types/place-type/place-type';

const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = `
  &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
  &copy; <a href="https://carto.com/attributions"></a>
`;

type MapRefProps = MutableRefObject<HTMLElement | null>

const useMap = (mapRef :MapRefProps, location :Location) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom,
      });

      const layer = new TileLayer(TILE_LAYER_URL,{ attribution: TILE_LAYER_ATTRIBUTION });

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;

    }
  }, [mapRef, location]);

  return map;
};


export default useMap;
