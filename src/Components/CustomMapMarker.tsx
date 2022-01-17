import { divIcon, LatLngTuple } from 'leaflet';
import { Marker, Tooltip } from 'react-leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOMServer from 'react-dom/server';

/*
 * Leaflet map marker with custom icon and color
 * */
export default function CustomMapMarker({
  position,
  color,
  tooltip,
}: {
  position: LatLngTuple;
  color: string;
  tooltip?: string;
}) {
  const icon = (
    <div>
      <FontAwesomeIcon size="3x" color={color} icon={['fas', 'map-marker-alt']} />
    </div>
  );
  return (
    <Marker
      position={position}
      key={position.toString() + color}
      icon={divIcon({
        html: ReactDOMServer.renderToStaticMarkup(icon),
        iconAnchor: [14, 36],
      })}
    >
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </Marker>
  );
}
