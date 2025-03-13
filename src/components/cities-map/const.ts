import { Icon } from 'leaflet';

const URL_MARKER_DEFAULT = '../../../public/img/pin.svg';
const URL_MARKER_CURRENT = '../../../public/img/pin-active.svg';
const URL_MARKER_ACTIVE = '../../../public/img/pin-current.svg';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const activeCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [60, 60],
  iconAnchor: [20, 40]
});

export {defaultCustomIcon, currentCustomIcon, activeCustomIcon};
