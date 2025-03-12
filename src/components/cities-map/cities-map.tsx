import { useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import { TypePlace } from '../../types/place-type/place-type';
import { Marker, layerGroup } from 'leaflet';
import { defaultCustomIcon, currentCustomIcon } from './const';

type CitiesMapProps = {
  offers: TypePlace[];
  currentId: string | null;
  className: string;
}

const CitiesMap = ({ offers, currentId, className } :CitiesMapProps) => {
  const mapRef = useRef(null);
  const location = offers[0].city.location; // центр же одинаковый у всех локаций, как я поннимаю. или лучше среднее значение находить ?
  const citiesMap = useMap(mapRef, location);

  useEffect(() => {
    if (!citiesMap) {
      return;
    }

    const markerLayer = layerGroup().addTo(citiesMap);

    offers.forEach((offer) => {
      const marker = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      });

      marker.setIcon(offer.id === currentId ? currentCustomIcon : defaultCustomIcon).addTo(markerLayer);
    });

    return () => {
      markerLayer.clearLayers();
    };
  }, [citiesMap, currentId, offers]);

  return (
    <section className={className} ref={mapRef}></section>
  );
};


export default CitiesMap;
