import { useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import { Location, TypePlace } from '../../types/place-type/place-type';
import { Marker, layerGroup } from 'leaflet';
import { defaultCustomIcon, currentCustomIcon } from './const';

type CitiesMapProps = {
  location: Location;
  offers: TypePlace[];
  currentId: string | null;
}

const CitiesMap = ({ location, offers, currentId} :CitiesMapProps) => {
  const mapRef = useRef(null);
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
    <div className="cities__right-section">
      <section className="cities__map map" ref={mapRef}></section>
    </div>
  );
};


export default CitiesMap;
