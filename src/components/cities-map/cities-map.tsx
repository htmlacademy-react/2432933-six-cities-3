import { useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map/use-map';
import { Location, TypePlace } from '../../types/place-type/place-type';
import {Icon, Marker, layerGroup} from 'leaflet';
import iconDefault from './defaultCustomIcon.svg';
import iconCurrent from './currentCustomIcon.svg';

type CitiesMapProps = {
  location: Location;
  offers: TypePlace[];
  currentId: string | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: iconDefault,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl:  iconCurrent,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

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

      marker
        .setIcon(
          currentId !== null && offer.id === currentId
            ? currentCustomIcon
            : defaultCustomIcon
        )
        .addTo(markerLayer);
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
