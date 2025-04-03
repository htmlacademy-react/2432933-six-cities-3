import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { TypePlace, Location } from '../../types/place-type/place-type';
import { Marker, layerGroup } from 'leaflet';
import { defaultCustomIcon, currentCustomIcon, activeCustomIcon } from './const';

type CitiesMapProps = {
  offers: TypePlace[];
  currentId?: string | null;
  className: string;
  currentMarker?: Location;
}

const CitiesMap = ({ offers, currentId, className, currentMarker} :CitiesMapProps) => {
  const mapRef = useRef(null);

  const centerLocation = offers?.[0]?.city.location;
  const citiesMap = useMap(mapRef, centerLocation);

  useEffect(() => {
    if (!citiesMap || !centerLocation){
      return;
    }

    citiesMap.setView([centerLocation.latitude, centerLocation.longitude], centerLocation.zoom);
  }, [citiesMap, centerLocation]);


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


    if (currentMarker) {
      const marker = new Marker({
        lat: currentMarker.latitude,
        lng: currentMarker.longitude,
      });
      marker.setIcon(activeCustomIcon).addTo(markerLayer);
    }

    return () => {
      markerLayer.clearLayers();
    };
  }, [citiesMap, currentId, offers, currentMarker ]);

  return (
    <section className={className} ref={mapRef}></section>
  );
};

export default CitiesMap;
